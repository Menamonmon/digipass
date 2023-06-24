import React, { useEffect, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ClassroomStudentsTab_teacherClassroom$key } from "./__generated__/ClassroomStudentsTab_teacherClassroom.graphql";
import { AddStudentModal } from "./AddStudentModal";
import { useRouter } from "next/router";
import ClassroomStudentsList from "./ClassroomStudentsList";

const classroomStudentsFragment = graphql`
  fragment ClassroomStudentsTab_teacherClassroom on FullStudent
  @relay(plural: true) {
    userProfile {
      id
      firstName
      lastName
      email
      pictureUrl
    }
  }
`;
interface ClassroomStudentsTabProps {
  students: ClassroomStudentsTab_teacherClassroom$key;
}

export const ClassroomStudentsTab: React.FC<ClassroomStudentsTabProps> = ({
  students,
}) => {
  const data = useFragment(classroomStudentsFragment, students);
  const router = useRouter();
  const classroomId = router.query.classroomId as string;
  return (
    <div className="flex flex-col justify-center">
      {(classroomId && (
        <AddStudentModal classroomId={classroomId as string} />
      )) ??
        ""}
      <ClassroomStudentsList students={data} classroomId={classroomId} />
    </div>
  );
};
