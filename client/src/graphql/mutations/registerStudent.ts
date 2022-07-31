import { graphql } from "react-relay";

export const registerStudent = graphql`
  mutation registerStudentMutation($idToken: String!) {
    registerStudentWithGoogle(idToken: $idToken) {
      jwt
      userType
    }
  }
`;
