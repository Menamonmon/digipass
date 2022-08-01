import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout/Layout";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "../components/Layout/ProtectedRoute";

const LoginPage: NextPage<{}> = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Head>
        <title>Login &#8226; digipass</title>
      </Head>
      <Layout>
        <ProtectedRoute allowed={!isAuthenticated} redirect="/">
          <div className="flex flex-col max-w-3xl gap-5 p-4 mx-auto mt-10 border-2 rounded-lg border-primary">
            <h2>Login to digipass</h2>
            <h5>
              Please make sure to use a school account with the jcpsnj.org
              domain for students and jcboe.org domain for teachers!
            </h5>
            <GoogleLoginButton />
          </div>
        </ProtectedRoute>
      </Layout>
    </>
  );
};

export default LoginPage;
