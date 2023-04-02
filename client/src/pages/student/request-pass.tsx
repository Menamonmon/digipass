import { NextPage } from "next";
import router, { useRouter } from "next/router";
import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";


const Page: NextPage<{}> = () => {
    const router = useRouter();
    const {authStatus} = useAuth();
    useEffect(() => {
    if (authStatus === "not_authenticated") {
      console.log(router.asPath)
      router.push(`/login?redirect_url=${router.asPath}`)
    }
    }, [authStatus]);
  return <div>Page</div>;
};

export default Page;
