import React, { useEffect } from "react";
import GoogleLogin, {
  GoogleLoginProps,
  GoogleLoginResponse,
} from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import { gapi } from "gapi-script";
import useAuth from "../../hooks/useAuth";

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID || "";

const GoogleLoginButton: React.FC<{}> = () => {
  const { handleLogin, isAuthenticated, userProfile } = useAuth();
  const onSuccess: GoogleLoginProps["onSuccess"] = (response) => {
    if (response.code === undefined)
      handleLogin(response as GoogleLoginResponse);
  };

  const onFailure: GoogleLoginProps["onFailure"] = async (response) => {};

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "profile",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Log in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      disabled={isAuthenticated}
      render={({ onClick, disabled }) => (
        <Button leftIcon={<FcGoogle />} onClick={onClick} disabled={disabled}>
          Login with Google
        </Button>
      )}
    />
  );
};

export default GoogleLoginButton;
