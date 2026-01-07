// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing specific Home styles

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container animate-fade-in">
      
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Stop Guessing. <br />
            <span className="highlight-text">Start Deciding.</span>
          </h1>
          <p className="hero-subtitle">
            Your logic is sound, but your feelings are messy. 
            We act as a <strong>digital mirror</strong> to reflect what truly matters to you.
          </p>
          
          <button 
            className="btn-primary hero-btn"
            onClick={() => navigate('/decision')}
          >
            Start New Decision 🚀
          </button>
        </div>

        {/* Visual 3D Element (CSS Shape) */}
        <div className="hero-visual">
          <div className="floating-shape">?</div>
        </div>
      </section>

      {/* --- FEATURES / HOW IT WORKS --- */}
      <section className="features-section">
        <h2 className="section-title">How It Works</h2>
        
        <div className="features-grid">
          {/* Card 1 */}
          <div className="card-3d feature-card">
            <div className="icon">⚖️</div>
            <h3>1. Set Priorities</h3>
            <p>Define what matters: Money, Stress, Growth, or Time. You set the weight.</p>
          </div>

          {/* Card 2 */}
          <div className="card-3d feature-card">
            <div className="icon">⭐</div>
            <h3 className="accent-text">2. Rate Options</h3>
            <p>Score your choices (e.g., Job A vs Job B) based on your priorities.</p>
          </div>

          {/* Card 3 */}
          <div className="card-3d feature-card">
            <div className="icon">🧠</div>
            <h3>3. The Logic</h3>
            <p>We apply a weighted decision matrix to reveal the mathematical winner.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;