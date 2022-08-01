import { graphql } from "react-relay";

export const RegisterStudentMutation = graphql`
  mutation RegisterStudentMutation($idToken: String!) {
    registerStudentWithGoogle(idToken: $idToken) {
      jwt
      userType
    }
  }
`;
