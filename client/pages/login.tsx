import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import AuthFormContainer from "../components/Auth/AuthFormContainer";
import Title from "../components/Auth/Title";
import Button from "../components/Button";
import Layout from "../components/Layout/Layout";
import { FcGoogle } from "react-icons/fc";

const LoginPage: NextPage<{}> = () => {
  const handleLogin = async () => {};

  return (
    <>
      <Head>
        <title>Login &#8226; digipass</title>
      </Head>
      <Layout>
        <AuthFormContainer>
          <Title
            header="Login to digipass"
            subtitle="Please make sure to use a school account with the jcpsnj.org domain for students and jcboe.org domain for teachers!"
          />
          <div className="h-5" />
          <GoogleLogin
            clientId={process.env.GOOGLE_OAUTH_CLIENT_ID!}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
            render={({ onClick, disabled }) => (
              <Button
                leftIcon={<FcGoogle />}
                onClick={onClick}
                disabled={disabled}
              >
                Login with Google
              </Button>
            )}
          />
        </AuthFormContainer>
      </Layout>
    </>
  );
};

export default LoginPage;
