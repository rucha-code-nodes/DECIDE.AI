




// // src/pages/Decision.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDecision } from '../context/DecisionContext';
// import './Decision.css';

// const Decision = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [scenarioInput, setScenarioInput] = useState(""); 

//   const { 
//     priorities, setPriorities,
//     optionNames, setOptionNames,
//     ratingsA, setRatingsA,
//     ratingsB, setRatingsB,
//     criteriaLabels, 
//     generateSmartCriteria, loadingAI 
//   } = useDecision();

//   // Helper for sliders
//   const renderSlider = (label, name, value, onChange, minLabel, maxLabel) => (
//     <div className="slider-group">
//       <div className="slider-header"><label>{label}</label><span className="slider-value">{value}</span></div>
//       <input type="range" min="0" max="10" name={name} value={value} onChange={onChange} className="custom-range" />
//       <div className="slider-labels"><span>{minLabel}</span><span>{maxLabel}</span></div>
//     </div>
//   );

//   const updateRating = (setter, currentRatings, field, val) => {
//     setter({ ...currentRatings, [field]: parseInt(val) });
//   };

//   return (
//     <div className="decision-container animate-fade-in">
//       {/* PROGRESS BAR */}
//       <div className="progress-container">
//         <div className="progress-track"><div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div></div>
//         <div className="step-indicator">Step {step} of 3</div>
//       </div>

//       <div className="card-3d decision-card">
        
//         {/* --- STEP 1: SCENARIO & PRIORITIES --- */}
//         {step === 1 && (
//           <div className="step-content animate-slide-up">
            
//             {/* 💡 THE FIXED AI SECTION */}
//             <div className="scenario-section">
//               <h2 className="step-title">1. What are we deciding?</h2>
              
//               <div className="ai-input-group">
//                 <input 
//                   type="text" 
//                   className="modern-input" 
//                   placeholder="e.g. Buying a new laptop..." 
//                   value={scenarioInput}
//                   onChange={(e) => setScenarioInput(e.target.value)}
//                   onKeyDown={(e) => e.key === 'Enter' && generateSmartCriteria(scenarioInput)} // Allow "Enter" key
//                 />
//                 <button 
//                   className="btn-primary ai-btn"
//                   onClick={() => generateSmartCriteria(scenarioInput)}
//                   disabled={loadingAI || !scenarioInput}
//                 >
//                   {loadingAI ? "Thinking... 🧠" : "Auto-Generate Criteria ✨"}
//                 </button>
//               </div>
//               <p className="ai-hint">Type a topic above and let AI suggest the best rating criteria for you.</p>
//             </div>

//             {/* DIVIDER */}
//             <hr className="divider-soft" style={{border: '0', borderTop: '1px solid rgba(148, 137, 121, 0.2)', margin: '2rem 0'}} />

//             {/* 2. THE SLIDERS */}
//             <h3 className="sub-title" style={{color: '#DFD0B8', marginBottom: '1rem'}}>Set Your Priorities</h3>
//             <div className="sliders-grid">
//               {renderSlider(criteriaLabels.money, "money", priorities.money, (e) => setPriorities({...priorities, money: parseInt(e.target.value)}), "Don't Care", "Vital")}
//               {renderSlider(criteriaLabels.growth, "growth", priorities.growth, (e) => setPriorities({...priorities, growth: parseInt(e.target.value)}), "Don't Care", "Vital")}
//               {renderSlider(criteriaLabels.time, "time", priorities.time, (e) => setPriorities({...priorities, time: parseInt(e.target.value)}), "Don't Care", "Vital")}
//               {renderSlider(criteriaLabels.stress, "stress", priorities.stress, (e) => setPriorities({...priorities, stress: parseInt(e.target.value)}), "Low Priority", "High Priority")}
//             </div>
            
//             <div className="action-row right">
//                 <button className="btn-primary" onClick={() => setStep(2)}>Next: Name Options ➔</button>
//             </div>
//           </div>
//         )}

//         {/* --- STEP 2: NAMES --- */}
//         {step === 2 && (
//           <div className="step-content animate-slide-up">
//              <h2 className="step-title">2. The Contenders</h2>
//              <div className="inputs-vertical">
//                <input type="text" placeholder="Option A (e.g. MacBook Air)" value={optionNames.A} onChange={(e)=>setOptionNames({...optionNames, A: e.target.value})} className="modern-input" />
//                <div className="vs-badge">VS</div>
//                <input type="text" placeholder="Option B (e.g. Dell XPS)" value={optionNames.B} onChange={(e)=>setOptionNames({...optionNames, B: e.target.value})} className="modern-input" />
//              </div>
//              <div className="action-row space-between">
//                 <button className="btn-secondary" onClick={() => setStep(1)}>⬅ Back</button>
//                 <button className="btn-primary" onClick={() => setStep(3)}>Next ➔</button>
//              </div>
//           </div>
//         )}

//         {/* --- STEP 3: RATINGS --- */}
//         {step === 3 && (
//           <div className="step-content animate-slide-up">
//             <h2 className="step-title">3. The Reality Check</h2>
//             <p className="step-desc">Rate the options based on your generated criteria.</p>
            
//             <div className="split-columns">
//               <div className="rating-column">
//                 <h3 className="column-header">{optionNames.A || "Option A"}</h3>
//                 {renderSlider(criteriaLabels.money, "money", ratingsA.money, (e) => updateRating(setRatingsA, ratingsA, 'money', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.growth, "growth", ratingsA.growth, (e) => updateRating(setRatingsA, ratingsA, 'growth', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.time, "time", ratingsA.time, (e) => updateRating(setRatingsA, ratingsA, 'time', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.stress, "stress", ratingsA.stress, (e) => updateRating(setRatingsA, ratingsA, 'stress', e.target.value), "Bad", "Great")}
//               </div>
//               <div className="rating-column">
//                 <h3 className="column-header">{optionNames.B || "Option B"}</h3>
//                 {renderSlider(criteriaLabels.money, "money", ratingsB.money, (e) => updateRating(setRatingsB, ratingsB, 'money', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.growth, "growth", ratingsB.growth, (e) => updateRating(setRatingsB, ratingsB, 'growth', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.time, "time", ratingsB.time, (e) => updateRating(setRatingsB, ratingsB, 'time', e.target.value), "Bad", "Great")}
//                 {renderSlider(criteriaLabels.stress, "stress", ratingsB.stress, (e) => updateRating(setRatingsB, ratingsB, 'stress', e.target.value), "Bad", "Great")}
//               </div>
//             </div>
            
//             <div className="action-row space-between">
//               <button className="btn-secondary" onClick={() => setStep(2)}>⬅ Back</button>
//               <button className="btn-primary" onClick={() => navigate('/result')}>Reveal Winner 🏆</button>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };
// export default Decision;




// src/pages/Decision.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDecision } from '../context/DecisionContext';
import './Decision.css';

const Decision = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // No local state for scenario! We use the one from Context.
  const { 
    priorities, setPriorities,
    optionNames, setOptionNames,
    ratingsA, setRatingsA,
    ratingsB, setRatingsB,
    criteriaLabels, 
    generateSmartCriteria, loadingAI,
    scenario, setScenario // 💡 Connected to Context
  } = useDecision();

  // Helper for sliders
  const renderSlider = (label, name, value, onChange, minLabel, maxLabel) => (
    <div className="slider-group">
      <div className="slider-header"><label>{label}</label><span className="slider-value">{value}</span></div>
      <input type="range" min="0" max="10" name={name} value={value} onChange={onChange} className="custom-range" />
      <div className="slider-labels"><span>{minLabel}</span><span>{maxLabel}</span></div>
    </div>
  );

  const updateRating = (setter, currentRatings, field, val) => {
    setter({ ...currentRatings, [field]: parseInt(val) });
  };

  return (
    <div className="decision-container animate-fade-in">
      <div className="progress-container">
        <div className="progress-track"><div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div></div>
        <div className="step-indicator">Step {step} of 3</div>
      </div>

      <div className="card-3d decision-card">
        
        {/* --- STEP 1: SCENARIO & PRIORITIES --- */}
        {step === 1 && (
          <div className="step-content animate-slide-up">
            
            <div className="scenario-section">
              <h2 className="step-title">1. What are we deciding?</h2>
              
              <div className="ai-input-group">
                <input 
                  type="text" 
                  className="modern-input" 
                  placeholder="e.g. Buying a new laptop..." 
                  
                  /* 💡 TWO-WAY BINDING TO CONTEXT */
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  
                  onKeyDown={(e) => e.key === 'Enter' && generateSmartCriteria(scenario)} 
                />
                <button 
                  className="btn-primary ai-btn"
                  onClick={() => generateSmartCriteria(scenario)}
                  disabled={loadingAI || !scenario}
                >
                  {loadingAI ? "Thinking... 🧠" : "Auto-Generate Criteria ✨"}
                </button>
              </div>
              <p className="ai-hint">Type a topic above and let AI suggest the best rating criteria for you.</p>
            </div>

            <hr className="divider-soft" style={{border: '0', borderTop: '1px solid rgba(148, 137, 121, 0.2)', margin: '2rem 0'}} />

            <h3 className="sub-title" style={{color: '#DFD0B8', marginBottom: '1rem'}}>Set Your Priorities</h3>
            <div className="sliders-grid">
              {renderSlider(criteriaLabels.money, "money", priorities.money, (e) => setPriorities({...priorities, money: parseInt(e.target.value)}), "Don't Care", "Vital")}
              {renderSlider(criteriaLabels.growth, "growth", priorities.growth, (e) => setPriorities({...priorities, growth: parseInt(e.target.value)}), "Don't Care", "Vital")}
              {renderSlider(criteriaLabels.time, "time", priorities.time, (e) => setPriorities({...priorities, time: parseInt(e.target.value)}), "Don't Care", "Vital")}
              {renderSlider(criteriaLabels.stress, "stress", priorities.stress, (e) => setPriorities({...priorities, stress: parseInt(e.target.value)}), "Low Priority", "High Priority")}
            </div>
            
            <div className="action-row right">
                <button className="btn-primary" onClick={() => setStep(2)}>Next: Name Options ➔</button>
            </div>
          </div>
        )}

        {/* --- STEP 2: NAMES --- */}
        {step === 2 && (
          <div className="step-content animate-slide-up">
             <h2 className="step-title">2. The Contenders</h2>
             <div className="inputs-vertical">
               <input type="text" placeholder="Option A (e.g. MacBook Air)" value={optionNames.A} onChange={(e)=>setOptionNames({...optionNames, A: e.target.value})} className="modern-input" />
               <div className="vs-badge">VS</div>
               <input type="text" placeholder="Option B (e.g. Dell XPS)" value={optionNames.B} onChange={(e)=>setOptionNames({...optionNames, B: e.target.value})} className="modern-input" />
             </div>
             <div className="action-row space-between">
                <button className="btn-secondary" onClick={() => setStep(1)}>⬅ Back</button>
                <button className="btn-primary" onClick={() => setStep(3)}>Next ➔</button>
             </div>
          </div>
        )}

        {/* --- STEP 3: RATINGS --- */}
        {step === 3 && (
          <div className="step-content animate-slide-up">
            <h2 className="step-title">3. The Reality Check</h2>
            <p className="step-desc">Rate the options based on your generated criteria.</p>
            
            <div className="split-columns">
              <div className="rating-column">
                <h3 className="column-header">{optionNames.A || "Option A"}</h3>
                {renderSlider(criteriaLabels.money, "money", ratingsA.money, (e) => updateRating(setRatingsA, ratingsA, 'money', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.growth, "growth", ratingsA.growth, (e) => updateRating(setRatingsA, ratingsA, 'growth', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.time, "time", ratingsA.time, (e) => updateRating(setRatingsA, ratingsA, 'time', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.stress, "stress", ratingsA.stress, (e) => updateRating(setRatingsA, ratingsA, 'stress', e.target.value), "Bad", "Great")}
              </div>
              <div className="rating-column">
                <h3 className="column-header">{optionNames.B || "Option B"}</h3>
                {renderSlider(criteriaLabels.money, "money", ratingsB.money, (e) => updateRating(setRatingsB, ratingsB, 'money', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.growth, "growth", ratingsB.growth, (e) => updateRating(setRatingsB, ratingsB, 'growth', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.time, "time", ratingsB.time, (e) => updateRating(setRatingsB, ratingsB, 'time', e.target.value), "Bad", "Great")}
                {renderSlider(criteriaLabels.stress, "stress", ratingsB.stress, (e) => updateRating(setRatingsB, ratingsB, 'stress', e.target.value), "Bad", "Great")}
              </div>
            </div>
            
            <div className="action-row space-between">
              <button className="btn-secondary" onClick={() => setStep(2)}>⬅ Back</button>
              <button className="btn-primary" onClick={() => navigate('/result')}>Reveal Winner 🏆</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default Decision;