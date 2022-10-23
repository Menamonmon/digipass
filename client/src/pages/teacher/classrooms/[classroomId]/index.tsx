import { NextPage } from "next";
import React from "react";
import { ClassroomTabPageWrapper } from "../../../../components/Classrooms/ClassroomTabs";

interface ViewClassroomPageProps {}

const ViewClassroomPage: NextPage<ViewClassroomPageProps> = () => {
  return <ClassroomTabPageWrapper tabName="classroom-info" />;
};

export default ViewClassroomPage;
