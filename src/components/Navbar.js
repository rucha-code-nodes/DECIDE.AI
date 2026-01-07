// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const location = useLocation(); // To highlight active link

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* LOGO AREA */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">DECIDE<span className="dot">.</span>AI</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>
            About
          </Link>
          
          <Link to="/decision" className={isActive('/decision')} onClick={() => setIsOpen(false)}>
            Start Decision
          </Link>
          {/* 💡 NEW LINK HERE */}
  <Link to="/history" className={isActive('/history')} onClick={() => setIsOpen(false)}>
    History
  </Link>
          <Link to="/login" className={isActive('/login')} onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/signup" className="btn-primary nav-cta" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;