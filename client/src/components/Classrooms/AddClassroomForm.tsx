import React, { useState } from "react";
import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { hourValidator, minuteValidator } from "../../utils";
import InputField from "../Utils/InputField";
import {
  ClassroomCreateInput,
  AddClassroomFormMutation,
} from "./__generated__/AddClassroomFormMutation.graphql";

const addClassroomMutation = graphql`
  mutation AddClassroomFormMutation($data: ClassroomCreateInput!) {
    createOneClassroom(data: $data) {
      id
      title
      startHour
      startMinute
    }
  }
`;

const initialClassroom: ClassroomCreateInput = {
  title: "",
  description: undefined,
  teacher: { connect: { id: null } },
  endHour: 0,
  endMinute: 0,
  startHour: 0,
  startMinute: 0,
};

const AddClassroomForm: React.FC = () => {
  const [classroom, setClassroom] =
    useState<NonNullable<ClassroomCreateInput>>(initialClassroom);
  const handleUpdate = (value: string | number, fieldName: string) => {
    setClassroom((prev) => ({ ...prev, [fieldName]: value }));
  };
  const [addClassroom, addingClassroom] =
    useMutation<AddClassroomFormMutation>(addClassroomMutation);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    addClassroom({
      variables: { data: classroom },
    });
    return false;
  };
  return (
    <div className="flex flex-col gap-5 my-5">
      <h5>Create a Classroom</h5>
      <form className="flex flex-col gap-5 my-5" onSubmit={handleSubmit}>
        <div className="flex">
          <h4>Title:</h4>
          <InputField
            className="h4"
            name="title"
            disabled={addingClassroom}
            onUpdate={handleUpdate}
            value={classroom["title"]}
            required
          />
        </div>
        <div className="flex gap-2">
          <p>Description:</p>
          <InputField
            className="max-w-xs min-h-16"
            name="description"
            disabled={addingClassroom}
            onUpdate={handleUpdate}
            value={classroom["description"]}
            component="textarea"
          />
        </div>
        <div className="flex justify-between w-1/2">
          <div className="flex gap-2">
            <p>Start Time:</p>
            <div className="flex">
              <InputField
                className="w-5"
                name="startHour"
                disabled={addingClassroom}
                onUpdate={handleUpdate}
                value={classroom["startHour"]}
                isValid={hourValidator}
                type="int"
                required
              />
              <InputField
                className="w-5"
                name="startMinute"
                disabled={addingClassroom}
                onUpdate={handleUpdate}
                value={classroom["startMinute"]}
                isValid={minuteValidator}
                type="int"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <p>End Time:</p>
            <div className="flex">
              <InputField
                className="w-5"
                name="endHour"
                disabled={addingClassroom}
                onUpdate={handleUpdate}
                value={classroom["endHour"]}
                isValid={hourValidator}
                type="int"
                required
              />
              <InputField
                className="w-5"
                name="endMinute"
                disabled={addingClassroom}
                onUpdate={handleUpdate}
                value={classroom["endMinute"]}
                isValid={minuteValidator}
                type="int"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClassroomForm;
