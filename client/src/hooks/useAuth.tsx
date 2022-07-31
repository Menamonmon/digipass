import React, { createContext, useContext, useEffect, useReducer } from "react";
import { GoogleLoginResponse } from "react-google-login";
import { AuthUserType, StudentProfile } from "../services/auth-service/types";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { RegisterStudentMutation } from "../graphql/mutations";
import {
  PERSISTED_AUTH_STATE_ID,
  persistState,
  retrievePersistedState,
} from "../services/auth-service";
import { CurrentUserQuery } from "../graphql/queries";
import { CurrentUserQuery as CurrentUserQueryType } from "../graphql/queries/__generated__/CurrentUserQuery.graphql";
import { RegisterStudentMutation as RegisterStudentMutationType } from "../graphql/mutations/__generated__/registerStudentMutation.graphql";

const AuthContext = createContext<AuthContextValues>({
  authStatus: "not_authenticated",
  userProfile: undefined,
  isAuthenticated: false,
  handleLogin: () => {},
});

type AuthState = {
  jwt?: string;
  authStatus: AuthUserType;
  userProfile?: StudentProfile;
  isAuthenticated: boolean;
};

export interface AuthContextValues extends AuthState {
  handleLogin: (response: GoogleLoginResponse) => void;
}

type Action =
  | { type: "authenticate_new_user"; jwt: string; userType: AuthUserType }
  | { type: "logout" }
  | { type: "new_user_verified"; userType: AuthUserType }
  | { type: "load_new_user_profile"; userProfile: StudentProfile }
  | { type: "load_existing_auth_state" };

const initialAuthState: AuthState = {
  authStatus: "not_authenticated",
  isAuthenticated: false,
};

const authReducerHandler = (state: AuthState, action: Action): AuthState => {
  if (action.type === "authenticate_new_user") {
    return {
      isAuthenticated: true,
      jwt: action.jwt,
      authStatus: action.userType,
      userProfile: undefined,
    };
  } else if (action.type === "logout") {
    return {
      isAuthenticated: false,
      userProfile: undefined,
      authStatus: "not_authenticated",
    };
  } else if (action.type === "load_new_user_profile") {
    if (state.isAuthenticated) {
      return { ...state, userProfile: action.userProfile };
    }
  } else if (action.type === "new_user_verified") {
    return { ...state, authStatus: action.userType };
  } else if (action.type === "load_existing_auth_state") {
    const persistedState = retrievePersistedState(PERSISTED_AUTH_STATE_ID);
    if (persistedState) {
      if (
        persistedState.isAuthenticated &&
        persistedState.jwt &&
        persistedState.authStatus &&
        persistedState.userProfile
      ) {
        return {
          isAuthenticated: persistedState.isAuthenticated === true,
          authStatus: persistedState.authStatus as AuthUserType,
          jwt: persistedState.jwt,
          userProfile: persistedState.userProfile as StudentProfile,
        };
      } else {
        return initialAuthState;
      }
    }
  }
  return state;
};

const authReducer = (state: AuthState, action: Action): AuthState => {
  const updatedAuthState = authReducerHandler(state, action);
  persistState(updatedAuthState, PERSISTED_AUTH_STATE_ID);
  return updatedAuthState;
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const [commitSignUp, isSignUpInFlight] = useMutation(RegisterStudentMutation);
  const handleLogin = async (response: GoogleLoginResponse) => {
    const idToken = response.tokenObj.id_token;
    commitSignUp({
      variables: { idToken },
      onCompleted(response: RegisterStudentMutationType["response"], errors) {
        if (response.registerStudentWithGoogle) {
          const { jwt, userType } = response.registerStudentWithGoogle;
          dispatch({
            type: "authenticate_new_user",
            jwt,
            userType: userType as AuthUserType,
          });
        }
      },
    });
  };

  useEffect(() => {
    dispatch({ type: "load_existing_auth_state" });
  }, []);

  // load the user using the query if we have a jwt but the user doesn't exist
  useEffect(() => {
    if (
      authState.isAuthenticated &&
      authState.jwt &&
      authState.userProfile === undefined
    ) {
      const data = useLazyLoadQuery<CurrentUserQueryType>(CurrentUserQuery, {});
      if (data.currentUser) {
        dispatch({
          type: "load_new_user_profile",
          userProfile: data.currentUser,
        });
      } else {
        console.log("Invalid JWT tokens / or local auth state, logging out");
        dispatch({ type: "logout" });
      }
    }
  }, [authState]);

  const value: AuthContextValues = {
    ...authState,
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
