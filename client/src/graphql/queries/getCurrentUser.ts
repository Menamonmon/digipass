import { graphql } from "react-relay";

export const getCurrentUser = graphql`
  query getCurrentUserQuery {
    currentUser {
      id
      firstName
      lastName
      email
      pictureUrl
    }
  }
`;
