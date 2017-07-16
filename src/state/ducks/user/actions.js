import types from "./types"

export const setUserToken = ({ token }) => {
  localStorage.setItem("token", token)

  return {
    type: types.SET_USER_TOKEN,
    token,
  }
}
export const logoutUser = () => {
  localStorage.removeItem("token")

  return {
    type: types.LOGOUT_USER,
  }
}
