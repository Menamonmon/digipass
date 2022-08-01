import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to digipass!</title>
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Home;
