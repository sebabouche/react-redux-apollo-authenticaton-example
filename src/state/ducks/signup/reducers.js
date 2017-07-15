import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "./actions"

const initialState = {
  errorMessage: null,
  successMessage: null,
  loading: false,
  email: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case CREATE_USER_REQUEST:
      return {
        ...initialState,
        loading: true,
        email: payload.email,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        successMessage: payload.message,
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        successMessage: null,
        errorMessage: payload.message,
      }
    default:
      return state
  }
}
