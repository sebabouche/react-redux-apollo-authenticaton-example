import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setUserToken } from '../../../state/ducks/user/actions';
import {
  signinUserRequest,
  signinUserSuccess,
  signinUserError,
} from '../../../state/ducks/login/actions';
import LoginForm from './LoginForm';
import { signinUser } from '../../../state/ducks/login/mutations';

const withMutation = graphql(signinUser, {
  props: ({ mutate }) => ({
    signinUser: variables => mutate(variables),
  }),
});

const mapStateToProps = state => ({
  ...state.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: ({ email, password }) => {
    dispatch(signinUserRequest({ email }));

    ownProps.signinUser({ variables: { email, password } })
    .then((data) => {
      const token = data.data.signinUser.token;

      dispatch(signinUserSuccess());
      dispatch(setUserToken({ token }));
    }).catch((error) => {
      dispatch(signinUserError({
        error,
      }));
    });
  },
});

export default withMutation(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
