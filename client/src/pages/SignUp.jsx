import React from "react";

export default function SignUp() {
  const [signUpData, setSignUpData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  )

  function handleChange(event) {
    setSignUpData(prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Create new account</h1>
        <p>Already have an account?<span>Log In</span></p>
        <form className="signup-form form">
          <div className="form-names">
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={signUpData.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={signUpData.lastName}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={signUpData.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={signUpData.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={signUpData.confirmPassword}
          />
          <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  )
}
