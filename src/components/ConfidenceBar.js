// src/components/ConfidenceBar.js
import React from 'react';
import './ConfidenceBar.css';


const ConfidenceBar = ({ scoreA, scoreB, nameA, nameB }) => {
  const total = scoreA + scoreB;
  const percentA = total === 0 ? 50 : Math.round((scoreA / total) * 100);
  const percentB = 100 - percentA;

  return (
    <div className="confidence-section card-3d">
      <h3 className="section-header">Decision Confidence</h3>
      
      <div className="bar-labels">
        <span style={{ color: percentA > percentB ? 'var(--text-highlight)' : '#888' }}>
          {nameA} ({percentA}%)
        </span>
        <span style={{ color: percentB > percentA ? 'var(--text-highlight)' : '#888' }}>
          {nameB} ({percentB}%)
        </span>
      </div>

      <div className="confidence-track">
        <div 
          className="confidence-fill left" 
          style={{ width: `${percentA}%` }}
        ></div>
        <div className="separator"></div>
        <div 
          className="confidence-fill right" 
          style={{ width: `${percentB}%` }}
        ></div>
      </div>

      <p className="confidence-caption">
        {Math.abs(scoreA - scoreB) < 10 
          ? "It's a close call! Both options are very similar." 
          : "There is a clear winner based on your data."}
      </p>
    </div>
  );
};

export default ConfidenceBar;