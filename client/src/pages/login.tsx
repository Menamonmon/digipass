import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AuthFormContainer from "../components/Auth/AuthFormContainer";
import Title from "../components/Auth/Title";
import Layout from "../components/Layout/Layout";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/Layout/ProtectedRoute";

const LoginPage: NextPage<{}> = () => {
  const router = useRouter();
  const { isAuthenticated, authStatus } = useAuth();

  return (
    <>
      <Head>
        <title>Login &#8226; digipass</title>
      </Head>
      <Layout>
        <ProtectedRoute allowed={!isAuthenticated} redirect="/">
          <AuthFormContainer>
            <Title
              header="Login to digipass"
              subtitle="Please make sure to use a school account with the jcpsnj.org domain for students and jcboe.org domain for teachers!"
            />
            <div className="text-center h-5" />
            <GoogleLoginButton />
          </AuthFormContainer>
        </ProtectedRoute>
      </Layout>
    </>
  );
};

export default LoginPage;
