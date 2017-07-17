import { graphql } from "react-apollo"
import { connect } from "react-redux"
import {
  createUserRequest,
  createUserSuccess,
  createUserError,
} from "../../../state/ducks/signup/actions"
import { createUser } from "../../../state/ducks/signup/mutations"
import SignupForm from "./SignupForm"

const withMutation = graphql(createUser, {
  props: ({ mutate }) => ({
    dispatchCreateUser: variables => mutate(variables),
  }),
})

const mapStateToProps = state => ({
  ...state.signup,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit({ firstname, lastname, email, password, emailSubscription }) {
    dispatch(createUserRequest({ email }))
    ownProps.dispatchCreateUser(
      {
        variables: {
          firstname,
          lastname,
          email,
          password,
          emailSubscription,
        },
      },
    )
    .then(() => {
      dispatch(createUserSuccess())
    }).catch(error => dispatch(createUserError({ error })))
  },
})

export default withMutation(connect(mapStateToProps, mapDispatchToProps)(SignupForm))
