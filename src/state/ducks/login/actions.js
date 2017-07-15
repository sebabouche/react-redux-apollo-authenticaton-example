import types from "./types"

export const signinUserRequest = ({ email }) => ({
  type: types.LOGIN_USER_REQUEST,
  email,
})

export const signinUserSuccess = () => ({
  type: types.LOGIN_USER_SUCCESS,
  message: "User logged in successfully!",
})

export const signinUserError = ({ error }) => ({
  type: types.LOGIN_USER_ERROR,
  message: error.message,
})
