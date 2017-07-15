import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setUserToken } from '../actions/user';
import { loginUserRequest, loginUserSuccess, loginUserError } from '../actions/login';
import AuthForm from '../components/AuthForm';
import { loginUser } from '../mutations';


const withMutation = graphql(loginUser, {
  props: ({ mutate }) => ({
    loginUser: input => mutate({
      variables: { input },
    }),
  }),
});

const mapStateToProps = state => ({
  ...state.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({ email, password }) => {
    dispatch(loginUserRequest({ email }));

    ownProps.loginUser({ email, password })
    .then((data) => {
      const token = data.data.loginUser.token;

      dispatch(loginUserSuccess());
      dispatch(setUserToken({ token }));
    }).catch((error) => {
      dispatch(loginUserError({
        error,
      }));
    });
  },
});

export default withMutation(connect(mapStateToProps, mapDispatchToProps)(AuthForm));
