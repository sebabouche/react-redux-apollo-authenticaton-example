import { gql } from "react-apollo"

export const signinUser = gql`
  mutation (
    $email: String!,
    $password: String!
  ) {
    signinUser(
      email: {
        email: $email,
        password: $password
      }
    ) {
      token
    }
  }
`
