import React from "react";
import GoogleLogin, {
  GoogleLoginProps,
  GoogleLoginResponse,
} from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import useAuth from "../../hooks/useAuth";
import dynamic from "next/dynamic";

const GapiLoaderComponent = dynamic(() => import("./GapiLoaderComponent"), {
  ssr: false,
});

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID || "";

const GoogleLoginButton: React.FC<{}> = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const onSuccess: GoogleLoginProps["onSuccess"] = (response) => {
    if (response.code === undefined)
      handleLogin(response as GoogleLoginResponse);
  };

  const onFailure: GoogleLoginProps["onFailure"] = async () => {};

  return (
    <>
      <GapiLoaderComponent />
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
    </>
  );
};

export default GoogleLoginButton;
