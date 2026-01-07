// src/pages/NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container animate-fade-in">
      
      {/* 3D Visual Element */}
      <div className="lost-visual">
        <div className="floating-404">?</div>
        <div className="shadow-404"></div>
      </div>

      <h1 className="error-code">404</h1>
      <h2 className="error-text">Looks like a bad decision.</h2>
      <p className="error-desc">
        The page you are looking for doesn't exist. 
        Let's get you back on the right path.
      </p>

      <button className="btn-primary" onClick={() => navigate('/')}>
        Go Home 🏠
      </button>
    </div>
  );
};

export default NotFound;