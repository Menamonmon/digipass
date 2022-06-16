import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AuthFormContainer from "../components/Auth/AuthFormContainer";
import Title from "../components/Auth/Title";
import Layout from "../components/Layout/Layout";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import useAuth from "../hooks/useAuth";

const LoginPage: NextPage<{}> = () => {
  const { isAuthenticated } = useAuth();
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
          <div className="text-center h-5" />
          <GoogleLoginButton />
        </AuthFormContainer>
      </Layout>
    </>
  );
};

export default LoginPage;
