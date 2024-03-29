import { Modal } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { toast } from "react-toastify";
import { graphql } from "relay-runtime";
import { Student } from "./StudentLookupItem";
import StudentLookupList from "./StudentLookupList";
import { AddStudentModalMutation } from "./__generated__/AddStudentModalMutation.graphql";
import {
  AddStudentModalQuery,
  AddStudentModalQuery$data,
} from "./__generated__/AddStudentModalQuery.graphql";
import * as _ from "lodash";

interface AddStudentModalProps {
  classroomId: string;
}

const searchStudentsQuery = graphql`
  query AddStudentModalQuery($query: String) {
    searchStudents(query: $query) {
      id
      firstName
      lastName
      email
      pictureUrl
    }
  }
`;

const addStudentToClassroomMutation = graphql`
  mutation AddStudentModalMutation($studentId: String!, $classroomId: String!) {
    addStudentToClassroom(studentId: $studentId, classroomId: $classroomId) {
      classroomId
      assignedAt
      student {
        userProfile {
          id
          firstName
          lastName
          email
          pictureUrl
        }
      }
    }
  }
`;

const AddStudentModal: React.FC<AddStudentModalProps> = ({ classroomId }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    cleanup();
    setOpen(false);
  };

  const [query, setQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<
    undefined | AddStudentModalQuery$data["searchStudents"][0]
  >();
  const [searchStudentsArgs, setSearchStudentsArgs] = useState({
    options: { fetchKey: 0 },
    variables: { query: "" },
  });

  const { searchStudents } = useLazyLoadQuery<AddStudentModalQuery>(
    searchStudentsQuery,
    searchStudentsArgs.variables,
    searchStudentsArgs.options
  );

  const [addStudent, addingStudent] = useMutation<AddStudentModalMutation>(
    addStudentToClassroomMutation
  );

  const refetch = useCallback((query: string) => {
    setSearchStudentsArgs((prev) => ({
      options: {
        fetchKey: (prev?.options.fetchKey ?? 0) + 1,
      },
      variables: { query },
    }));
  }, []);

  const handleStudentChosen = (student: Student) => {
    setSelectedStudent(student);
    setQuery("");
  };

  const cleanup = () => {
    setQuery("");
    debouncedRefetch("");
    setSelectedStudent(undefined);
  };

  const handleSubmit = () => {
    if (selectedStudent?.id && classroomId) {
      addStudent({
        variables: { studentId: selectedStudent.id, classroomId },
        updater: (store, data) => {
          const { addStudentToClassroom } = data;

          if (addStudentToClassroom) {
            const existing = store.get(addStudentToClassroom.classroomId);
            const currentStudentsList = existing?.getLinkedRecords("students");
            const newStudent = store
              .getRootField("addStudentToClassroom")
              ?.getLinkedRecord("student");

            if (newStudent && currentStudentsList) {
              currentStudentsList.unshift(newStudent);
              existing?.setLinkedRecords(currentStudentsList, "students");
            }
          }
        },
      });
      onClose();
    } else {
      toast("Error: Invalid classroomId or studentId", { type: "error" });
    }
  };

  const debouncedRefetch = useCallback(_.debounce(refetch, 300), []);

  return (
    <>
      <button className="w-11/12 mx-auto my-4 btn" onClick={onOpen}>
        Add Student
      </button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="inline-flex flex-col w-full h-full">
          <div className="flex flex-col justify-between w-1/2 p-5 m-auto rounded-lg shadow-lg bg-zinc-700 h-1/2">
            <h4>Add A Student</h4>
            {/* Modal Content */}
            <div className="h-72">
              <input
                className="w-full input"
                placeholder="Lookup a student by name or email....."
                value={query}
                onChange={(e) => {
                  const value = e.target.value;
                  console.log(value);
                  debouncedRefetch(value);
                  setQuery(value);
                }}
              />
              <StudentLookupList
                students={searchStudents}
                onChoose={handleStudentChosen}
              />
              <div>
                {selectedStudent ? (
                  <>
                    <h5>Selected Student:</h5>
                    <div className="flex items-center justify-between px-3">
                      <div>
                        <p>
                          {selectedStudent.firstName} {selectedStudent.lastName}{" "}
                          ({selectedStudent.email})
                        </p>
                      </div>
                      <Image
                        src={selectedStudent.pictureUrl}
                        width="50px"
                        height="50px"
                        className="rounded-full"
                      />
                    </div>
                  </>
                ) : (
                  <h5>No Student Selected!</h5>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-end gap-3">
              <button className="btn" onClick={onClose}>
                Close
              </button>
              <button
                className="btn"
                onClick={handleSubmit}
                disabled={!selectedStudent || addingStudent}
              >
                {addingStudent ? "Adding...." : "Add"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddStudentModal;
