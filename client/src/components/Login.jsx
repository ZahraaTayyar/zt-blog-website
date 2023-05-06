import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form action="" className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password..."
          id="password"
        />

        <button className="loginButton">Login</button>
      </form>

      <button className="loginRegisterButton">
        <Link to="/register" className="link">Register</Link>
      </button>
    </div>
  );
}

export default Login;
