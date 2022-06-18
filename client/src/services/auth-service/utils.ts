import { GoogleLoginResponse } from "react-google-login";
import { config } from "../../../config";

const calcRefreshTime = (expiresIn?: number) =>
  (expiresIn || 3600 - 5 * 60) * 1000;

export const refreshToken = (
  response: GoogleLoginResponse,
  updateAccessToken: (newAccessToken: string) => void
) => {
  const refreshTime = calcRefreshTime(response.tokenObj.expires_in);
  const refreshTokenTimeoutFunction = async (response: GoogleLoginResponse) => {
    const newResponse = await response.reloadAuthResponse();

    // Handle the new response
    updateAccessToken(newResponse.access_token);
    const refreshTime = calcRefreshTime(newResponse.expires_in);
    setTimeout(refreshTokenTimeoutFunction, refreshTime);
  };
  setTimeout(refreshTokenTimeoutFunction, refreshTime);
};

export const buildRegisterStudentMutation = (idToken: string) => {
  return `
mutation registerStudent{
  registerStudentWithGoogle(idToken: "${idToken}") {
    id
    firstName
    lastName
    pictureUrl
    email
    userType
    jwt
  }
}
	`;
};
