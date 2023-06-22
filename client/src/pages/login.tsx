import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import useAuth from "../hooks/useAuth";
import { ProtectedRoute } from "../components/Layout";
import { Checkbox } from "@mui/material";
import LoginTypeCheckbox from "../components/Auth/LoginTypeCheckbox";

const LoginPage: NextPage<{}> = () => {
  const { isAuthenticated, setUserType } = useAuth();

  useEffect(() => {
    setUserType("teacher");
  }, []);

  return (
    <>
      <Head>
        <title>Login &#8226; digipass</title>
      </Head>
      <ProtectedRoute allowed={!isAuthenticated} redirect="/">
        <div className="flex flex-col max-w-3xl gap-5 p-4 mx-auto mt-10 border-2 rounded-lg border-primary">
          <h2>Login to digipass</h2>
          <h5>
            Please make sure to use a school account with the jcpsnj.org domain
            for students and jcboe.org domain for teachers!
          </h5>
          <GoogleLoginButton />
          <LoginTypeCheckbox />
        </div>
      </ProtectedRoute>
    </>
  );
};

export default LoginPage;
