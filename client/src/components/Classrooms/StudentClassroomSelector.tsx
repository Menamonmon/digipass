import React, { useEffect, useState } from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import {
  StudentClassroomSelectorQuery,
  StudentClassroomSelectorQuery$data,
} from "./__generated__/StudentClassroomSelectorQuery.graphql";
import InputField from "../Utils/InputField";
import StudentSelectedClassroomDetails from "./StudentSelectedClassroomDetails";

const getStudentClassroomQuery = graphql`
  query StudentClassroomSelectorQuery($classroomId: String!) {
    studentClassroom(classroomId: $classroomId) {
      id
      title
      description
      startHour
      startMinute
      endHour
      endMinute
    }
  }
`;

interface StudentClassroomSelectorProps {}

const StudentClassroomSelector: React.FC<
  StudentClassroomSelectorProps
> = () => {
  const [classroomId, setClassroomId] = useState("");
  const [query, setQuery] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState<
    StudentClassroomSelectorQuery$data["studentClassroom"] | null
  >(null);

  const data = useLazyLoadQuery<StudentClassroomSelectorQuery>(
    getStudentClassroomQuery,
    { classroomId: query }
  );

  const handleClassroomIdChange = (value: string | number) => {
    setClassroomId(value as string);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", classroomId, selectedClassroom);
  };

  const handleDataLoad = () => {
    setSelectedClassroom(data.studentClassroom);
  };

  const isClassroomIdValid = (value: string | number) =>
    /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.test(
      value as string
    );

  useEffect(() => {
    if (isClassroomIdValid(classroomId)) {
      setQuery(classroomId);
    } else {
      setQuery("");
      setSelectedClassroom(null);
    }
  }, [classroomId]);

  if (data.studentClassroom && !selectedClassroom) {
    handleDataLoad();
  }

  return (
    <form
      className="flex flex-col max-w-md p-4 mx-auto my-20 border rounded shadow shadow-gray-200 bg-slate-800"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-2xl font-bold">Classroom Selector</h2>
      <div className="mb-4">
        <label htmlFor="classroomId" className="block mb-2 text-sm font-bold">
          Classroom ID (UUID):
        </label>
        <InputField
          value={classroomId}
          name="classroomId"
          onUpdate={handleClassroomIdChange}
          required
          type="string"
          isValid={isClassroomIdValid}
          errorMessage="Please enter a valid UUID."
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>
      {selectedClassroom && (
        <StudentSelectedClassroomDetails
          selectedClassroom={selectedClassroom}
        />
      )}
    </form>
  );
};

export default StudentClassroomSelector;
