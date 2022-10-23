import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to digipass!</title>
      </Head>
      <div>
        <a href="teacher/classrooms">Classrooms</a>
      </div>
    </>
  );
};

export default Home;
