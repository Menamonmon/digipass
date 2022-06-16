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
