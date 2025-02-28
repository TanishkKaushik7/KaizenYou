import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/Sign.css";

const UserSignup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setUserRole] = useState("student");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up as:", fullName, email, userRole, agreeTerms);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form className="signup-form" onSubmit={handleSignup}>
          {/* Full Name */}
          <div className="signup-input-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="signup-input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="signup-input-field">
            <label htmlFor="userRole">Select Role</label>
            <select id="userRole" value={userRole} onChange={(e) => setUserRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="school">School</option>
            </select>
          </div>

          {/* Password */}
          <div className="signup-input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="signup-input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Agree Terms Checkbox */}
          <div className="signup-agree">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <label htmlFor="agreeTerms">I agree to the Terms & Conditions</label>
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signup-btn">Sign Up</button>

          {/* Already Have an Account? */}
          <div className="signup-links">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
