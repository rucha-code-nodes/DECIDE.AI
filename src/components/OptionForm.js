import React from 'react';
import { useDecision } from '../context/DecisionContext';
import './OptionForm.css';

const OptionForm = () => {
  const { optionNames, setOptionNames } = useDecision();

  return (
    <div className="option-form-container animate-slide-up">
      <h2 className="step-title">Name Your Options</h2>
      <p className="step-desc">Who are the contenders?</p>
      
      <div className="vs-layout-3d">
        {/* Option A Input */}
        <div className="input-card left">
          <label className="input-label">Option A</label>
          <input 
            type="text" 
            placeholder="e.g. Current Job"
            value={optionNames.A}
            onChange={(e) => setOptionNames({...optionNames, A: e.target.value})}
            className="modern-input-3d"
            autoFocus
          />
        </div>

        {/* The VS Badge */}
        <div className="vs-badge-large">VS</div>

        {/* Option B Input */}
        <div className="input-card right">
          <label className="input-label">Option B</label>
          <input 
            type="text" 
            placeholder="e.g. New Offer"
            value={optionNames.B}
            onChange={(e) => setOptionNames({...optionNames, B: e.target.value})}
            className="modern-input-3d"
          />
        </div>
      </div>
    </div>
  );
};

export default OptionForm;