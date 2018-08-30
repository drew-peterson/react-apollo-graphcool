import gql from "graphql-tag";
export const USER = gql`
  {
    user {
      id
      email
    }
  }
`;

export const AUTH_USER = gql`
  mutation AuthenticateUser($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;
