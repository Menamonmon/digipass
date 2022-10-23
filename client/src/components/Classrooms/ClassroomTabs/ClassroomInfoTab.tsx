import React from "react";
import { useFragment, useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { Editable } from "../../Editable";
import { ClassroomInfoTab_teacherClassroom$key } from "./__generated__/ClassroomInfoTab_teacherClassroom.graphql";
import { ClassroomInfoTab_updateClassroomMutation } from "./__generated__/ClassroomInfoTab_updateClassroomMutation.graphql";

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

const updateClassroomMutation = graphql`
  mutation ClassroomInfoTab_updateClassroomMutation(
    $data: TeacherClassroomUpdateInput!
    $classroomId: String!
  ) {
    updateClassroom(data: $data, classroomId: $classroomId) {
      id
    }
  }
`;

interface ClassroomTabInfoProps {
  classroomInfo: ClassroomInfoTab_teacherClassroom$key;
}

export const ClassroomInfoTab: React.FC<ClassroomTabInfoProps> = ({
  classroomInfo,
}) => {
  const data = useFragment(classroomInfoFragment, classroomInfo);
  const [commitUpdate, isUpdating] =
    useMutation<ClassroomInfoTab_updateClassroomMutation>(
      updateClassroomMutation
    );

  const handleUpdate = (newValue: string | number, name: string) => {
    commitUpdate({
      variables: {
        classroomId: data.id,
        data: { [name]: newValue },
      },
      updater: (store, data) => {
        const { updateClassroom } = data;

        if (updateClassroom) {
          const existing = store.get(updateClassroom.id);
          existing?.setValue(newValue, name);
        }
      },
    });
  };

  return (
    <div>
      <Editable
        className="h4"
        name="title"
        disabled={isUpdating}
        onUpdate={handleUpdate}
        required
      >
        {data.title}
      </Editable>
      <div>
        <Editable
          disabled={isUpdating}
          onUpdate={handleUpdate}
          name="description"
          inputComponent="textarea"
        >
          {data.description ?? "No description provided"}
        </Editable>
      </div>
    </div>
  );
};
