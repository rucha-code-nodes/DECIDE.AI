// // src/pages/Result.js
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDecision } from '../context/DecisionContext';
// import ResultCard from '../components/ResultCard';
// import ConfidenceBar from '../components/ConfidenceBar';
// import './Result.css';

// const Result = () => {
//   const navigate = useNavigate();
//   const { result, processResult, ratingsA } = useDecision();

//   // Trigger calculation on mount if data exists
//   useEffect(() => {
//     // If no data (user jumped here directly), go back home
//     if (!ratingsA) {
//         navigate('/');
//     } else {
//         processResult();
//     }
//   }, []);

//   if (!result) return <div className="loading">Calculating...</div>;

//   const { scoreA, scoreB, winner, optionNames } = result;

//   return (
//     <div className="result-page animate-fade-in">
//       <h1 className="page-title">The Verdict</h1>
//       <p className="page-subtitle">Here is how the math stacks up against your feelings.</p>

//       {/* 1. The Cards Showdown */}
//       <div className="results-grid">
//         <ResultCard 
//           winnerName={optionNames.A || "Option A"} 
//           score={scoreA.totalScore} 
//           isWinner={winner === 'A' || winner === 'TIE'} 
//         />
        
//         <div className="vs-divider">VS</div>

//         <ResultCard 
//           winnerName={optionNames.B || "Option B"} 
//           score={scoreB.totalScore} 
//           isWinner={winner === 'B'} 
//         />
//       </div>

//       {/* 2. The Visual Breakdown */}
//       <div className="breakdown-container">
//         <ConfidenceBar 
//             scoreA={scoreA.totalScore} 
//             scoreB={scoreB.totalScore}
//             nameA={optionNames.A || "Option A"}
//             nameB={optionNames.B || "Option B"}
//         />
//       </div>

//       {/* 3. Action Buttons */}
//       <div className="result-actions">
//         <button className="btn-secondary" onClick={() => navigate('/decision')}>
//           ← Tweak Priorities
//         </button>
//         <button className="btn-primary" onClick={() => navigate('/')}>
//           Start Over 🔄
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Result;




// src/pages/Result.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDecision } from '../context/DecisionContext';
import ResultCard from '../components/ResultCard';
import ConfidenceBar from '../components/ConfidenceBar';
import './Result.css';

const Result = () => {
  const navigate = useNavigate();
  const { result, processResult, ratingsA, saveToHistory } = useDecision();

  useEffect(() => {
    if (!ratingsA) { navigate('/'); } 
    else { processResult(); }
  }, []);

  if (!result) return <div className="loading">Calculating...</div>;

  const { scoreA, scoreB, winner, optionNames, insight } = result; // 💡 Get Insight

  return (
    <div className="result-page animate-fade-in">
      <h1 className="page-title">The Verdict</h1>

      {/* 💡 FEATURE 1: SMART INSIGHT DISPLAY */}
      <div className="insight-box">
        <p>{insight}</p>
      </div>

      <div className="results-grid">
        <ResultCard winnerName={optionNames.A || "Option A"} score={scoreA.totalScore} isWinner={winner === 'A' || winner === 'TIE'} />
        <div className="vs-divider">VS</div>
        <ResultCard winnerName={optionNames.B || "Option B"} score={scoreB.totalScore} isWinner={winner === 'B'} />
      </div>

      <div className="breakdown-container">
        <ConfidenceBar scoreA={scoreA.totalScore} scoreB={scoreB.totalScore} nameA={optionNames.A || "Option A"} nameB={optionNames.B || "Option B"} />
      </div>

      <div className="result-actions">
        <button className="btn-secondary" onClick={() => navigate('/decision')}>← Tweak Priorities</button>
        {/* 💡 NEW BUTTON */}
        <button className="btn-secondary" onClick={saveToHistory}>
           Save 💾
        </button>
        <button className="btn-primary" onClick={() => navigate('/')}>Start Over 🔄</button>
      </div>
    </div>
  );
};

export default Result;