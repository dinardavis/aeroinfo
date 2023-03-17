import React from "react";

export default function Login() {
  const [loginData, setLoginData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  )

  function handleChange(event) {
    setLoginData(prevData => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Welcome back!</h1>
        <form className="login-form form">
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={loginData.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={loginData.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
