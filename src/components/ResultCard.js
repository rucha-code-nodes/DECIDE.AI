// src/components/ResultCard.js
import React from 'react';
import './ResultCard.css'
const ResultCard = ({ winnerName, score, isWinner }) => {
  // Dynamic styles based on if this card is the winner or loser
  const cardStyle = isWinner 
    ? { 
        borderColor: 'var(--text-highlight)', 
        transform: 'scale(1.05)', 
        zIndex: 2,
        boxShadow: '0 20px 50px rgba(223, 208, 184, 0.15)' 
      } 
    : { 
        opacity: 0.7, 
        transform: 'scale(0.95)',
        filter: 'grayscale(0.6)'
      };

  return (
    <div className="result-card-container" style={cardStyle}>
      <div className="result-badge">
        {isWinner ? '🏆 BEST CHOICE' : '2ND PLACE'}
      </div>
      
      <h2 className="result-name">{winnerName || "Unknown"}</h2>
      
      <div className="score-circle">
        <span className="score-label">Score</span>
        <span className="score-number">{score}</span>
      </div>

      <div className="result-details">
        {isWinner ? (
            <p className="recommendation-text">
              Based on your priorities, this option aligns best with your goals.
            </p>
        ) : (
            <p className="recommendation-text">
              A good option, but it falls short on your key priorities.
            </p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;