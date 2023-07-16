import React from "react";
import { StudentClassroomSelectorQuery$data } from "./__generated__/StudentClassroomSelectorQuery.graphql";
import Tooltipped from "../Utils/Tooltipped";

interface StudentSelectedClassroomDetailsProps {
  selectedClassroom: NonNullable<
    StudentClassroomSelectorQuery$data["studentClassroom"]
  >;
}

const StudentSelectedClassroomDetails: React.FC<
  StudentSelectedClassroomDetailsProps
> = ({ selectedClassroom }) => {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-xl font-bold">Selected Classroom Details:</h3>
      <p>
        <strong>Start Time:</strong> {selectedClassroom.startHour}:
        {selectedClassroom.startMinute.toString().padStart(2, "0")}
      </p>
      <p>
        <strong>End Time:</strong> {selectedClassroom.endHour}:
        {selectedClassroom.endMinute.toString().padStart(2, "0")}
      </p>
      <p>
        <strong>Title:</strong> {selectedClassroom.title}
      </p>
      <Tooltipped className="flex line-clamp-4">
        <strong>Description:</strong> {selectedClassroom.description}
      </Tooltipped>
      <a
        href={`/student/request-pass/${selectedClassroom.id}`}
        className="inline-block px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Proceed to Pass Request
      </a>
    </div>
  );
};

export default StudentSelectedClassroomDetails;
