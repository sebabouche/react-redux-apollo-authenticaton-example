import types from "./types"

export const createUserRequest = ({ email }) => ({
  type: types.CREATE_USER_REQUEST,
  email,
})

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
  message: "User created successfully!",
})

export const createUserError = ({ error }) => ({
  type: types.CREATE_USER_ERROR,
  message: error.message,
})
