import React from 'react';
import { useDecision } from '../context/DecisionContext';
import './RatingSection.css';

const RatingSection = () => {
  const { ratingsA, setRatingsA, ratingsB, setRatingsB, optionNames } = useDecision();

  // Helper to update a specific rating (e.g., 'money') for A or B
  const updateRating = (setter, currentRatings, factor, value) => {
    setter({ ...currentRatings, [factor]: parseInt(value) });
  };

  // Reusable Slider (Mini version for this step)
  const renderMiniSlider = (label, value, onChange) => (
    <div className="mini-slider-row">
      <div className="mini-label">
        <span>{label}</span>
        <span className="mini-value">{value}</span>
      </div>
      <input 
        type="range" min="0" max="10" 
        value={value} 
        onChange={onChange}
        className="mini-range"
      />
    </div>
  );

  return (
    <div className="rating-container animate-slide-up">
      <h2 className="step-title">Rate the Reality</h2>
      <p className="step-desc">Score them honestly (0-10) based on facts.</p>

      <div className="comparison-columns">
        
        {/* COLUMN A */}
        <div className="rating-card-3d">
          <h3 className="rating-header">{optionNames.A || "Option A"}</h3>
          <div className="rating-body">
            {renderMiniSlider("Money", ratingsA.money, (e) => updateRating(setRatingsA, ratingsA, 'money', e.target.value))}
            {renderMiniSlider("Growth", ratingsA.growth, (e) => updateRating(setRatingsA, ratingsA, 'growth', e.target.value))}
            {renderMiniSlider("Time", ratingsA.time, (e) => updateRating(setRatingsA, ratingsA, 'time', e.target.value))}
            {renderMiniSlider("Stress", ratingsA.stress, (e) => updateRating(setRatingsA, ratingsA, 'stress', e.target.value))}
          </div>
        </div>

        {/* COLUMN B */}
        <div className="rating-card-3d">
          <h3 className="rating-header">{optionNames.B || "Option B"}</h3>
          <div className="rating-body">
            {renderMiniSlider("Money", ratingsB.money, (e) => updateRating(setRatingsB, ratingsB, 'money', e.target.value))}
            {renderMiniSlider("Growth", ratingsB.growth, (e) => updateRating(setRatingsB, ratingsB, 'growth', e.target.value))}
            {renderMiniSlider("Time", ratingsB.time, (e) => updateRating(setRatingsB, ratingsB, 'time', e.target.value))}
            {renderMiniSlider("Stress", ratingsB.stress, (e) => updateRating(setRatingsB, ratingsB, 'stress', e.target.value))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default RatingSection;