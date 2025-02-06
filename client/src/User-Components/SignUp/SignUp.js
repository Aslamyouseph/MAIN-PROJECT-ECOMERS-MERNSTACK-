import React from "react";
import "./SignUp.css"; // Import the CSS file
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // This is used to enable routing.

function SignUp() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="signup-container">
        <h2>SignUp</h2>
        <form action="#">
          <input type="text" placeholder="Enter your name" required />
          <input type="text" placeholder="Enter your username" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="text" placeholder="Enter your number" required />
          <input type="password" placeholder="Enter your password" required />
          <input type="password" placeholder="Confirm your password" required />

          <div className="login-link">
            <Link to="/login">Already have an account? Login</Link>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SignUp;
