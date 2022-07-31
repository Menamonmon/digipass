import { graphql } from "react-relay";

export const registerStudent = graphql`
  mutation registerStudent($idToken: String!) {
    registerStudentWithGoogle(idToken: $idToken) {
      jwt
      userType
    }
  }
`;
