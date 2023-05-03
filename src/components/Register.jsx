import React from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form action="" className="registerForm">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          id="username"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          id="email"
        />

        <label htmlFor="password">Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your password..."
          id="password"
        />

        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link to="/login" className="link">Login</Link>
      </button>
    </div>
  );
}

export default Register;
