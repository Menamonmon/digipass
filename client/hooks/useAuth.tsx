import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleLoginResponse } from "react-google-login";
import { config } from "../config";
import { refreshToken } from "../services/auth-service";
import { AuthServiceImpl } from "../services/auth-service/AuthServiceImpl";
import { AuthStatus, StudentProfile } from "../services/auth-service/types";

export interface AuthContextValues {
  userProfile: StudentProfile | null;
  accessToken?: string;
  isAuthenticated: boolean;
  handleLogin: (response: GoogleLoginResponse) => void;
  authStatus: AuthStatus;
}

const AuthContext = createContext<AuthContextValues>({
  userProfile: null,
  isAuthenticated: false,
  handleLogin: () => {},
  authStatus: "not_authenticated",
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] =
    useState<AuthContextValues["userProfile"]>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("not_authenticated");
  const [accessToken, setAccessToken] = useState("");
  const [jwt, setJwt] = useState("");
  const authService = new AuthServiceImpl(config.backendUrl);
	useEffect(() => {
	  
  }, []);

  const handleLogin = async (response: GoogleLoginResponse) => {
    const userData = await authService.registerUser(
      response.tokenObj.id_token,
      response.profileObj.email
    );
    if (userData) {
      const { userType: loginType, jwt: newJwt, ...user } = userData;
      setJwt(newJwt);
      setUserProfile(user);
      setAuthStatus(loginType);
      setAccessToken(response.accessToken);
      refreshToken(response, setAccessToken);
    } else {
      setAuthStatus("not_authenticated");
    }
  };

  const value: AuthContextValues = {
    userProfile,
    isAuthenticated:
      authStatus === "old_student" || authStatus === "old_teacher",
    handleLogin,
    authStatus,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
