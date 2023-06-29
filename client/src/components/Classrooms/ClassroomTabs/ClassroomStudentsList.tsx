import React from "react";
import { ClassroomStudentsTab_teacherClassroom$data } from "./__generated__/ClassroomStudentsTab_teacherClassroom.graphql";
import Image from "next/image";
import DeleteStudentButton from "./DeleteStudentButton";
import clsx from "clsx";

export const ClassroomStudentsListItem: React.FC<{
  userProfile: ClassroomStudentsTab_teacherClassroom$data[0]["userProfile"];
  classroomId: string;
  minified?: boolean;
}> = ({
  classroomId,
  userProfile: { email, firstName, id, lastName, pictureUrl },
  minified,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between gap-2 transition flex-grow",
        !minified &&
          "p-2 m-2 transition shadow-lg  bg-slate-800 hover:bg-slate-600 rounded-xl"
      )}
    >
      <Image
        src={pictureUrl}
        width="50px"
        height="50px"
        className="rounded-full"
      />
      <div>
        <div>
          {firstName} {lastName}
        </div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {!minified && (
        <DeleteStudentButton studentId={id} classroomId={classroomId} />
      )}
    </div>
  );
};

const ClassroomStudentsList: React.FC<{
  students: ClassroomStudentsTab_teacherClassroom$data;
  classroomId: string;
}> = ({ students, classroomId }) => {
  return (
    <div
      className="overflow-scroll"
      style={{ maxHeight: "calc(875px - 200px)" }}
    >
      {students.map(({ userProfile }, idx) => (
        <ClassroomStudentsListItem
          classroomId={classroomId}
          userProfile={userProfile}
          key={idx}
        />
      ))}
    </div>
  );
};

export default ClassroomStudentsList;
