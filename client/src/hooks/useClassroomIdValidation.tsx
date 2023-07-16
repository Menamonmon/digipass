import { graphql, useLazyLoadQuery } from "react-relay";
import { useClassroomIdValidationQuery } from "./__generated__/useClassroomIdValidationQuery.graphql";

export const useClassroomIdValidation = (classroomId: string) => {
  if (!classroomId) {
    classroomId = "";
  }
  const getStudentClassroomQuery = graphql`
    query useClassroomIdValidationQuery($classroomId: String!) {
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

  const data = useLazyLoadQuery<useClassroomIdValidationQuery>(
    getStudentClassroomQuery,
    { classroomId: classroomId }
  );

  if (data.studentClassroom) {
    return true;
  }
  return false;
};
