import { graphql } from "react-relay";

export const getCurrentUser = graphql`
  query getCurrentUser {
    currentUser {
      id
      firstName
      lastName
      email
      pictureUrl
    }
  }
`;
