// src/pages/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Shared CSS

const Signup = () => {
  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card-3d">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Start making smarter decisions today.</p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="auth-input" 
            />
          </div>

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
            Create Account 🚀
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? 
          <Link to="/login" className="auth-link">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;