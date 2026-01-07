// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">DECIDE<span className="dot">.</span>AI</h2>
          <p className="footer-desc">
            The decision-making tool that mirrors your priorities. 
            Stop guessing, start calculating.
          </p>
          <div className="social-icons">
            <span className="icon-3d">🐦</span>
            <span className="icon-3d">📸</span>
            <span className="icon-3d">💼</span>
          </div>
        </div>

        {/* Column 2: Product */}
        <div className="footer-links">
          <h3>Product</h3>
          <Link to="/decision">Start Decision</Link>
          <Link to="/result">How it Works</Link>
          <a href="#">Pricing</a>
          <a href="#">Features</a>
        </div>

        {/* Column 3: Company */}
        <div className="footer-links">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Column 4: Legal */}
        <div className="footer-links">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Decide.AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;