import { gql } from "react-apollo"

export const createUser = gql`
  mutation (
    $email: String!,
    $password: String!,
    $firstname: String!,
    $lastname: String!,
    $emailSubscription: Boolean!
  ) {
    createUser(
      authProvider: {
        email: {
          email: $email,
          password: $password
        }
      },
      firstname: $firstname,
      lastname: $lastname,
      emailSubscription: $emailSubscription
    ) {
      id
    }
  }
`
