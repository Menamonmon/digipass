import React, { useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  ClassroomStudentsTab_teacherClassroom$data,
  ClassroomStudentsTab_teacherClassroom$key,
} from "./__generated__/ClassroomStudentsTab_teacherClassroom.graphql";
import { AddStudentModal } from "./AddStudentModal";
import { useRouter } from "next/router";
import { ClassroomStudentsList } from "./StudentsList";

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
    passes {
      id
      reason
      createdAt
      approved
      startTime
      endTime
      duration
      classroomId
      issuerId
      studentId
    }
  }
`;
interface ClassroomStudentsTabProps {
  students: ClassroomStudentsTab_teacherClassroom$key;
}

export type FullStudent = Omit<
  ClassroomStudentsTab_teacherClassroom$data[0],
  " $fragmentType"
>;

export const ClassroomStudentsTab: React.FC<ClassroomStudentsTabProps> = ({
  students,
}) => {
  const data = useFragment(classroomStudentsFragment, students);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const classroomId = router.query.classroomId;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col justify-between" style={{ minHeight: 700 }}>
      <AddStudentModal
        classroomId={(classroomId as string) ?? ""}
        open={open}
        onClose={handleClose}
      />
      <ClassroomStudentsList students={data} />
      <button className="btn" onClick={handleOpen}>
        Add Student
      </button>
    </div>
  );
};
