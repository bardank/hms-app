import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(
      input: { identifier: $email, password: $password, provider: "local" }
    ) {
      jwt
      user {
        username
        email
        confirmed
        blocked
      }
    }
  }
`;

export const GET_USER = gql`
  query Me {
    me {
      id
      username
      email
      confirmed
      blocked
    }
  }
`;
