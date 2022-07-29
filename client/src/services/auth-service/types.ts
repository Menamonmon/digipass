export interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
}

export interface AuthStudentProfile extends StudentProfile {
  userType: "new_student" | "old_student";
  jwt: string;
}

export type AuthUserType =
  | "not_authenticated"
  | "new_student"
  | "old_student"
  | "new_teacher"
  | "old_teacher";
