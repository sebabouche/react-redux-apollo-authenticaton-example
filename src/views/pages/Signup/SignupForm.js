import React, { PropTypes } from "react"

const styles = {
  form: {
    marginBottom: 20,
  },
  input: {
    display: "block",
    width: 200,
    margin: "0 auto 10px auto",
    height: 18,
    fontSize: 14,
    padding: 10,
    outline: 0,
  },
  successMessage: {
    backgroundColor: "rgb(251, 161, 97)",
    padding: 10,
    width: 300,
    color: "white",
    margin: "15px auto",
  },
  errorMessage: {
    backgroundColor: "red",
    padding: 10,
    width: 300,
    color: "white",
    margin: "15px auto",
  },
}

const SignupForm = ({
  handleSubmit,
  loading,
  firstname,
  lastname,
  email,
  submitButtonLabel,
  successMessage,
  errorMessage,
}) => (
  <form
    onSubmit={(event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      return handleSubmit({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
        emailSubscription: false,
      })
    }}
    style={styles.form}
  >
    <input
      type="text"
      name="firstname"
      placeholder="firstname"
      defaultValue={firstname}
      style={styles.input}
      required
    />
    <input
      type="text"
      name="lastname"
      placeholder="lastname"
      defaultValue={lastname}
      style={styles.input}
      required
    />
    <input
      type="text"
      name="email"
      placeholder="email"
      defaultValue={email}
      style={styles.input}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      style={styles.input}
      required
    />

    <div>
      <button
        type="submit"
        className="btn"
      >{submitButtonLabel}
      </button>
    </div>

    <div>
      {loading && (
        <div style={{ margin: 20 }}>Loading...</div>
      )}

      {successMessage && (
        <div style={styles.successMessage}>{successMessage}</div>
      )}

      {errorMessage && (
        <div style={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  </form>
)

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
}

SignupForm.defaultProps = {
  loading: false,
  successMessage: "",
  errorMessage: "",
  firstname: "",
  lastname: "",
  email: "",
}

export default SignupForm
