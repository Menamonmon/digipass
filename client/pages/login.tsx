import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AuthFormContainer from "../components/Auth/AuthFormContainer";
import Layout from "../components/Layout/Layout";

const LoginPage: NextPage<{}> = () => {
	return (
    <>
      <Head>
        <title>Login &#8226; digipass</title>
      </Head>
			<Layout>
				<AuthFormContainer>
					
				</AuthFormContainer>
			 </Layout>
    </>
  );
};

export default LoginPage;
