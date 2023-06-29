import { capitalize, Tab, Tabs } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import { ClassroomInfoTab } from "./ClassroomInfoTab";
import { ClassroomPassesTab } from "./ClassroomPassesTab";
import { ClassroomStudentsTab } from "./ClassroomStudentsTab";
import { ClassroomTabViewerQuery } from "./__generated__/ClassroomTabViewerQuery.graphql";

interface ClassroomTabViewerProps {
  classroomId: string;
  currentActiveTab: ClassroomTab;
}

export type ClassroomTab = "classroom-info" | "students" | "passes";

const fullClassroomQuery = graphql`
  query ClassroomTabViewerQuery($classroomId: String!) {
    teacherClassroom(classroomId: $classroomId) {
      ...ClassroomInfoTab_teacherClassroom
      students {
        ...ClassroomStudentsTab_teacherClassroom
      }
      passes {
        ...ClassroomPassesTab_teacherClassroom
      }
    }
  }
`;

export const ClassroomTabViewer: React.FC<ClassroomTabViewerProps> = ({
  currentActiveTab,
  classroomId,
}) => {
  const router = useRouter();
  const handleTabChange = (e: React.SyntheticEvent, newVal: ClassroomTab) => {
    const postfix = newVal === "classroom-info" ? "" : newVal;
    const newRoute = `/teacher/classrooms/${classroomId}/${postfix}`;
    router.push(newRoute);
  };

  const data = useLazyLoadQuery<ClassroomTabViewerQuery>(fullClassroomQuery, {
    classroomId,
  });
  return (
    <>
      <Head>
        <title>
          Classroom |{" "}
          {currentActiveTab === "classroom-info"
            ? "General Info"
            : capitalize(currentActiveTab)}
        </title>
      </Head>
      <div>
        <Tabs
          value={currentActiveTab}
          onChange={handleTabChange}
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="General Info" value="classroom-info" />
          <Tab label="Students" value="students" />
          <Tab label="Passes" value="passes" />
        </Tabs>
        {data.teacherClassroom ? (
          currentActiveTab === "classroom-info" ? (
            <ClassroomInfoTab classroomInfo={data.teacherClassroom} />
          ) : currentActiveTab === "passes" ? (
            <ClassroomPassesTab passes={data.teacherClassroom.passes} />
          ) : (
            <ClassroomStudentsTab students={data.teacherClassroom.students} />
          )
        ) : (
          <div>
            Error in fetching the classroom info. Please try again later and
            make sure you're viewing an unarchived classroom.
          </div>
        )}
      </div>
    </>
  );
};
