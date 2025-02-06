import React from "react";
import "./SignUp.css"; // Import the CSS file

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
            <a>Already have an account? Login</a>
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
