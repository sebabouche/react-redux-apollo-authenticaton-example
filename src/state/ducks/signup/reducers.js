import types from "./types"

const initialState = {
  errorMessage: null,
  successMessage: null,
  loading: false,
  email: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
  case types.CREATE_USER_REQUEST:
    return {
      ...initialState,
      loading: true,
      email: payload.email,
    }
  case types.CREATE_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      errorMessage: null,
      successMessage: payload.message,
    }
  case types.CREATE_USER_ERROR:
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
