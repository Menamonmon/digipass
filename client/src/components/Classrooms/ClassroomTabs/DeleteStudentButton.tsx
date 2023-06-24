import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { graphql, useMutation } from "react-relay";
import { toast } from "react-toastify";
import { DeleteStudentButtonMutation } from "./__generated__/DeleteStudentButtonMutation.graphql";

interface DeleteStudentButtonProps {
  studentId: string;
  classroomId: string;
}

const deleteStudentMutation = graphql`
  mutation DeleteStudentButtonMutation(
    $studentId: String!
    $classroomId: String!
  ) {
    removeStudentFromClassroom(
      studentId: $studentId
      classroomId: $classroomId
    ) {
      classroomId
      studentId
    }
  }
`;

const DeleteStudentButton: React.FC<DeleteStudentButtonProps> = ({
  studentId,
  classroomId,
}) => {
  const [commit, inFlight] = useMutation<DeleteStudentButtonMutation>(
    deleteStudentMutation
  );

  const deleteStudent = () => {
    commit({
      variables: { studentId, classroomId },
      updater: (store, data) => {
        const existing = store.get(classroomId);
        const currentStudentsList = existing?.getLinkedRecords("students");
        if (currentStudentsList) {
          const newStudentsList = currentStudentsList.filter((student) => {
            return (
              student.getLinkedRecord("userProfile")?.getDataID() !== studentId
            );
          });
          existing?.setLinkedRecords(newStudentsList, "students");
        }
      },

      onCompleted: () => {
        toast("Deleted Successfully", { type: "success" });
      },
      onError: (error) => {
        console.log(error);
        toast("An error ocurred while trying to delete the student", {
          type: "error",
        });
      },
    });
  };

  return (
    <button
      disabled={inFlight}
      onClick={deleteStudent}
      className=" btn btn-sm btn-circle btn-outline hover:bg-red-500"
    >
      <BsTrashFill />
    </button>
  );
};

export default DeleteStudentButton;
