import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SIGN UP</h1>

        <div className="field">
          <label>Username</label>
          <input type="text" placeholder="enter username" />
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="enter password" />
        </div>

        <button className="signup-btn">signup</button>

        <p className="forgot">
          forgot password? <span>reset password</span>
        </p>

        <p className="social-text">Signup with social media accounts</p>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Signup;
