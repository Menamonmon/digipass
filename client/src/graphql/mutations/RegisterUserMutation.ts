import { graphql } from "react-relay";

export const RegisterUserMutation = graphql`
  mutation RegisterUserMutation($idToken: String!) {
    registerUserWithGoogle(idToken: $idToken) {
      jwt
      userType
    }
  }
`;
