import React, { createContext, useContext, useState } from "react";
import { GoogleLoginResponse } from "react-google-login";
import { config } from "../config";
import { refreshToken } from "../services/auth-service";
import { AuthServiceImpl } from "../services/auth-service/AuthServiceImpl";
import { StudentProfile } from "../services/auth-service/types";

export interface AuthContextValues {
  userProfile: StudentProfile | null;
  accessToken?: string;
  isAuthenticated: boolean;
  handleLogin: (response: GoogleLoginResponse) => void;
}

const AuthContext = createContext<AuthContextValues>({
  userProfile: null,
  isAuthenticated: false,
  handleLogin: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [userProfile, setUserProfile] =
    useState<AuthContextValues["userProfile"]>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [jwt, setJwt] = useState("");
  const authService = new AuthServiceImpl(config.backendUrl);
  const handleLogin = async (response: GoogleLoginResponse) => {
    const userData = await authService.registerUser(
      response.tokenObj.id_token,
      response.profileObj.email
    );
    if (userData) {
      const { userType: loginType, jwt: newJwt, ...user } = userData;
      setJwt(newJwt);
      setUserProfile(user);
      setIsAuthenticated(true);
      setAccessToken(response.accessToken);
      refreshToken(response, setAccessToken);
    }
  };

  const value: AuthContextValues = {
    userProfile,
    isAuthenticated,
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
