/* globals localStorage */

import types from "./types"

const initialState = {
  token: localStorage.getItem("token"),
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
  case types.SET_USER_TOKEN:
    return {
      ...state,
      token: payload.token,
    }
  case types.LOGOUT_USER:
    return {
      ...state,
      token: null,
    }
  default:
    return state
  }
}
