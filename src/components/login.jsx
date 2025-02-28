import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/login.css";

const UserLogin = () => {
  const [userRole, setUserRole] = useState("student");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as:", userRole, userEmail, userPassword, rememberUser);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>User Login</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          {/* Role Selection Dropdown */}
          <div className="input-field">
            <label htmlFor="userRole">Select Role</label>
            <select id="userRole" value={userRole} onChange={(e) => setUserRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="school">School</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="input-field">
            <label htmlFor="userEmail">Username or Email</label>
            <input
              type="text"
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-field">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="auth-remember">
            <input
              type="checkbox"
              id="rememberUser"
              checked={rememberUser}
              onChange={() => setRememberUser(!rememberUser)}
            />
            <label htmlFor="rememberUser">Remember Me</label>
          </div>

          {/* Login Button */}
          <button type="submit" className="auth-btn">Login</button>

          {/* Forgot Password and Sign Up Links */}
          <div className="auth-links">
            <a href="#">Forgot Password?</a>
            <span>|</span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
