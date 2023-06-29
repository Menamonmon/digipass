import React from "react";
import { ClassroomPassesTab_teacherClassroom$data } from "./__generated__/ClassroomPassesTab_teacherClassroom.graphql";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useMutation, useQueryLoader } from "react-relay";
import { ClassroomPassesListStudentMetadataQuery } from "./__generated__/ClassroomPassesListStudentMetadataQuery.graphql";
import { ClassroomStudentsListItem } from "./ClassroomStudentsList";
import { timeStringFromISODateTime } from "../../../utils";
import PassStatusButton from "../../Passes/PassStatusButton";
import { format } from "timeago.js";

const getStudentById = graphql`
  query ClassroomPassesListStudentMetadataQuery($query: String) {
    searchStudents(query: $query) {
      id
      firstName
      lastName
      email
      pictureUrl
    }
  }
`;

export const ClassroomPassesListItem: React.FC<{
  pass: ClassroomPassesTab_teacherClassroom$data[0];
}> = ({
  pass: {
    approved,
    createdAt,
    duration,
    endTime,
    startTime,
    reason,
    studentId,
  },
}) => {
  const { searchStudents } =
    useLazyLoadQuery<ClassroomPassesListStudentMetadataQuery>(
      getStudentById,
      {
        query: studentId,
      },
      { fetchPolicy: "store-or-network" }
    );

  return (
    <div className="flex flex-col p-2 m-2 transition shadow-lg bg-slate-800 hover:bg-slate-600 rounded-xl">
      <div className="flex items-center justify-between gap-2 sm:flex-row xs:flex-row">
        {searchStudents.length == 1 ? (
          <ClassroomStudentsListItem
            userProfile={searchStudents[0]}
            classroomId={""}
            minified
          />
        ) : (
          <div>Error Loading Student's Information</div>
        )}
        <div className="flex-col justify-center flex-grow">
          <div className="line-clamp-1">
            Start:{" "}
            {startTime ? timeStringFromISODateTime(startTime) : "Not provided"}
          </div>
          <div className="line-clamp-1">
            End: {endTime ? timeStringFromISODateTime(endTime) : "Not provided"}
          </div>
        </div>
        <div className="flex-col justify-center flex-grow">
          <div className="line-clamp-1">Duration: {duration}</div>
          <div className="max-w-xs line-clamp-2">Reason: {reason}</div>
        </div>
        <PassStatusButton approved={approved} startTime={startTime} />
      </div>
      <div className="text-xs text-right">
        Created: {format(new Date(createdAt), "en_US")}
      </div>
    </div>
  );
};

const ClassroomPassesList: React.FC<{
  passes: ClassroomPassesTab_teacherClassroom$data;
}> = ({ passes }) => {
  return (
    <div
      className="overflow-scroll"
      style={{ maxHeight: "calc(875px - 120px)" }}
    >
      {passes.map((pass) => (
        <ClassroomPassesListItem pass={pass} key={pass.id} />
      ))}
    </div>
  );
};

export default ClassroomPassesList;
