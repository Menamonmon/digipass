import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { TeacherClassroomsQuery } from "../../graphql/queries/TeacherClassroomsQuery";
import { TeacherClassroomsQuery as TeacherClassroomsQueryType } from "../../graphql/queries/__generated__/TeacherClassroomsQuery.graphql";
import useAuth from "../../hooks/useAuth";
import { DetailedClassroom } from "./DetailedClassroom";

export const DetailedClassroomsList: React.FC<{}> = () => {
  const { authStatus } = useAuth();
  const isTeacher =
    authStatus === "new_teacher" || authStatus === "old_teacher";

  const { teacherClassrooms } = useLazyLoadQuery<TeacherClassroomsQueryType>(
    TeacherClassroomsQuery,
    {}
  );

  return (
    <div>
      {isTeacher ? (
        !teacherClassrooms || teacherClassrooms.length === 0 ? (
          <div>
            You do not have any classrooms at the moment. Create one by clicking
            on the plus sign at the bottom right corner of this page.
          </div>
        ) : (
          <div className="my-5">
            <h1 className="my-5">Your Classrooms</h1>
            <div className="flex flex-wrap justify-center gap-5">
              {teacherClassrooms?.map((classroom) => (
                <DetailedClassroom {...classroom} />
              ))}
            </div>
          </div>
        )
      ) : (
        <div>You're not a students can't view a detailed classrooms list</div>
      )}
    </div>
  );
};
