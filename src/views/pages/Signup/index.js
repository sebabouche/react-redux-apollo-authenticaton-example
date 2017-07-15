import React from "react"
import { Link } from "react-router-dom"
import SignupContainer from "./SignupContainer"

export default () => (
  <div>
    <h2>Create your account</h2>
    <div>
      <SignupContainer submitButtonLabel={"Create account"} />
    </div>
    <Link to="/login">Have an account? Login here! </Link>
  </div>
)
