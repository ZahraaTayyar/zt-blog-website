import React from 'react';
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle"></span>
      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          id="email"
        />

        <label htmlFor="password">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password..."
          id="password"
        />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton"></button>
    </div>
  );
}

export default Login
