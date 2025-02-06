import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./login.css";

function Login() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="login-container">
        <h2>Login</h2>
        <form action="#">
          <input type="text" placeholder="Enter your username" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <div className="signUp-link">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
