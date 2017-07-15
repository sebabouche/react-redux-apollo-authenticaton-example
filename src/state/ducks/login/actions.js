export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const signinUserRequest = ({ email }) => ({
  type: LOGIN_USER_REQUEST,
  email,
});

export const signinUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
  message: 'User logged in successfully!',
});

export const signinUserError = ({ error }) => ({
  type: LOGIN_USER_ERROR,
  message: error.message,
});
