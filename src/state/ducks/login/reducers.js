import types from "./types"

const initialState = {
  token: null,
  loading: false,
  email: null,
  errorMessage: null,
  alertMessage: null,
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
  case types.LOGIN_USER_REQUEST:
    return {
      ...initialState,
      loading: true,
      email: payload.email,
    }
  case types.LOGIN_USER_SUCCESS:
    return {
      ...state,
      successMessage: payload.message,
      loading: false,
    }
  case types.LOGIN_USER_ERROR:
    return {
      ...state,
      loading: false,
      errorMessage: payload.message,
    }
  default:
    return state
  }
}
