import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions"

const initialState = {
  token: null,
  loading: false,
  email: null,
  errorMessage: null,
  alertMessage: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...initialState,
        loading: true,
        email: payload.email,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        successMessage: payload.message,
        loading: false,
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload.message,
      }
    default:
      return state
  }
}
