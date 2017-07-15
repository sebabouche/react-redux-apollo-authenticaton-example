import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { createUserRequest, createUserSuccess, createUserError } from '../actions/register';
import { createUser } from '../mutations';
import AuthForm from '../components/AuthForm';

const withMutation = graphql(createUser, {
  props: ({ mutate }) => ({
    createUser: input => mutate({
      variables: { input },
    }),
  }),
});

const mapStateToProps = state => ({
  ...state.register,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit({ email, password }) {
    dispatch(createUserRequest({ email }));
    ownProps.createUser({ email, password })
    .then(() => {
      dispatch(createUserSuccess());
    }).catch(error => dispatch(createUserError({ error })));
  },
});

export default withMutation(connect(mapStateToProps, mapDispatchToProps)(AuthForm));
