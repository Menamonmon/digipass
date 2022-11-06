import React from "react";
import { FullStudent } from "../ClassroomStudentsTab";
import ClassroomStudentsItem from "./ClassroomStudentsItem";

interface ClassroomStudentsListProps {
  students: Readonly<FullStudent[]>;
}

const ClassroomStudentsList: React.FC<ClassroomStudentsListProps> = ({
  students,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Current Students:</h3>
      <ul className="flex flex-col gap-2 overflow-y-scroll max-h-[620px]">
        {students.map((student, idx) => (
          <ClassroomStudentsItem {...student} key={idx} />
        ))}
      </ul>
    </div>
  );
};

export default ClassroomStudentsList;
