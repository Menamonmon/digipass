import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { DetailedClassroomsList } from "../../../components/Classrooms/DetailedClassroomsList";

const ClassroomsPage: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>My Classrooms</title>
      </Head>
      <DetailedClassroomsList />
    </>
  );
};

export default ClassroomsPage;
