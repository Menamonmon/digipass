import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ClassroomStudentsTab_teacherClassroom$key } from "./__generated__/ClassroomStudentsTab_teacherClassroom.graphql";

const classroomStudentsFragment = graphql`
  fragment ClassroomStudentsTab_teacherClassroom on FullStudent
  @relay(plural: true) {
    userProfile {
      firstName
      lastName
      id
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
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
