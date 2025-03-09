// src/components/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
    // Redirect to another page after successful sign-in
    // navigate("/dashboard");
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="auth-modal">
      <div className="auth-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <button className="link-button" onClick={handleSignUpRedirect}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
