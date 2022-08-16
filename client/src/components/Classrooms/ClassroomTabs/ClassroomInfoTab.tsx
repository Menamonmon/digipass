import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ClassroomInfoTab_teacherClassroom$key } from "./__generated__/ClassroomInfoTab_teacherClassroom.graphql";

const classroomInfoFragment = graphql`
  fragment ClassroomInfoTab_teacherClassroom on FullClassroom {
    id
    title
    description
    classCode
    createdAt
    archived
    startHour
    startMinute
    endHour
    endMinute
  }
`;

interface ClassroomTabInfoProps {
  classroomInfo: ClassroomInfoTab_teacherClassroom$key;
}

export const ClassroomInfoTab: React.FC<ClassroomTabInfoProps> = ({
  classroomInfo,
}) => {
  const data = useFragment(classroomInfoFragment, classroomInfo);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
