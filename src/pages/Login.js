// src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Shared CSS

const Login = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card-3d">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Log in to access your saved decisions.</p>

        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="auth-input" 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="auth-input" 
            />
          </div>

          <button type="button" className="btn-primary auth-btn">
            Login ➔
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? 
          <Link to="/signup" className="auth-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;