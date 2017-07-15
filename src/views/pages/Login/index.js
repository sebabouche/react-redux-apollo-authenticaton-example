import React from "react"
import { Link } from "react-router-dom"
import LoginContainer from "./LoginContainer"

export default () => (
  <div>
    <h2>Login</h2>
    <div>
      <LoginContainer submitButtonLabel={"Login"} />
    </div>
    <Link to="/signup">Don"t have an account? Sign up here! </Link>
  </div>
)
