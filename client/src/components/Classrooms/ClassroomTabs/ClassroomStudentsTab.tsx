import React, { useEffect, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ClassroomStudentsTab_teacherClassroom$key } from "./__generated__/ClassroomStudentsTab_teacherClassroom.graphql";
import { AddStudentModal } from "./AddStudentModal";
import { useRouter } from "next/router";

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
  const classroomId = router.query.classroomId;
  try {
    return (
      <div>
        {((classroomId as string) && (
          <AddStudentModal classroomId={classroomId as string} />
        )) ??
          ""}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (err) {
    console.log(err);
    return <div>GOOGLE</div>;
  }
};
