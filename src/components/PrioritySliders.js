import React from 'react';
import { useDecision } from '../context/DecisionContext';
import './PrioritySliders.css';

const PrioritySliders = () => {
  const { priorities, setPriorities } = useDecision();

  const handleChange = (e) => {
    setPriorities({ ...priorities, [e.target.name]: parseInt(e.target.value) });
  };

  const renderSlider = (label, name, value, minLabel, maxLabel) => (
    <div className="slider-group-3d">
      <div className="slider-header">
        <label>{label}</label>
        <div className="slider-value-badge">{value}</div>
      </div>
      <input 
        type="range" 
        min="0" max="10" 
        name={name} 
        value={value} 
        onChange={handleChange}
        className="custom-range-input"
      />
      <div className="slider-labels">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );

  return (
    <div className="priority-container animate-slide-up">
      <h2 className="step-title">What matters to you?</h2>
      <p className="step-desc">Set the importance (0-10) for each factor.</p>
      
      <div className="sliders-grid">
        {renderSlider("💰 Money / Salary", "money", priorities.money, "Don't Care", "Vital")}
        {renderSlider("📈 Career Growth", "growth", priorities.growth, "Not Important", "Crucial")}
        {renderSlider("⏳ Time / Work-Life", "time", priorities.time, "Flexible", "Strict")}
        {renderSlider("😫 Stress Level", "stress", priorities.stress, "Ignore Stress", "Avoid Stress")}
      </div>
    </div>
  );
};

export default PrioritySliders;