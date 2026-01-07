


// // src/context/DecisionContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { calculateScore, getWinner, getInsight } from '../utils/calculateScore';

// const DecisionContext = createContext();
// export const useDecision = () => useContext(DecisionContext);

// // --- API CONFIG ---
// const API_KEY = process.env.REACT_APP_OPENROUTER_KEY; 
// const BASE_URL = "https://openrouter.ai/api/v1";
// const MODEL = "mistralai/mistral-7b-instruct:free"; 

// export const DecisionProvider = ({ children }) => {
//   // 1. Data State
//   const [priorities, setPriorities] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
//   const [optionNames, setOptionNames] = useState({ A: '', B: '' });
//   const [ratingsA, setRatingsA] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
//   const [ratingsB, setRatingsB] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
//   const [result, setResult] = useState(null);
//   const [loadingAI, setLoadingAI] = useState(false);
  
//   // Default Labels
//   const [criteriaLabels, setCriteriaLabels] = useState({
//     money: "💰 Money / Cost",
//     growth: "📈 Value / Benefit",
//     time: "⏳ Time / Effort",
//     stress: "😫 Risk / Stress"
//   });

//   // 💡 NEW: Load History from Local Storage on startup
//   const [history, setHistory] = useState(() => {
//     const saved = localStorage.getItem('decisionHistory');
//     return saved ? JSON.parse(saved) : [];
//   });

//   // --- AI LOGIC ---
//   const generateSmartCriteria = async (scenario) => {
//     if (!scenario) return;
    
//     if (!API_KEY) {
//       console.error("❌ CRITICAL ERROR: No API Key found.");
//       alert("Missing API Key. Did you create the .env file and restart?");
//       return;
//     }

//     setLoadingAI(true);

//     try {
//       const response = await fetch(`${BASE_URL}/chat/completions`, {
//         method: "POST",
//         headers: {
//           "Authorization": `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//           "HTTP-Referer": window.location.href,
//           "X-Title": "Decide AI App"
//         },
//         body: JSON.stringify({
//           model: MODEL,
//           messages: [
//             {
//               role: "system",
//               content: "You are a decision helper. Output ONLY a valid JSON object with exactly 4 keys: 'c1', 'c2', 'c3', 'c4'. The values should be short 2-3 word criteria for making a decision about the user's topic. Do not include any other text."
//             },
//             {
//               role: "user",
//               content: `The decision topic is: "${scenario}". Give me 4 distinct criteria to judge this decision.`
//             }
//           ]
//         })
//       });

//       if (!response.ok) {
//         const errData = await response.json();
//         console.error("OpenRouter Error Details:", errData);
//         throw new Error(`API Error: ${response.status}`);
//       }

//       const data = await response.json();
//       if (!data.choices || !data.choices.length) throw new Error("No choices returned from AI");

//       const content = data.choices[0].message.content;
//       const jsonStart = content.indexOf('{');
//       const jsonEnd = content.lastIndexOf('}') + 1;
      
//       if (jsonStart === -1 || jsonEnd === -1) throw new Error("AI did not return valid JSON");
      
//       const cleanJson = content.substring(jsonStart, jsonEnd);
//       const parsed = JSON.parse(cleanJson);

//       setCriteriaLabels({
//         money: `💡 ${parsed.c1}`,
//         growth: `📈 ${parsed.c2}`,
//         time: `⏳ ${parsed.c3}`,
//         stress: `🧩 ${parsed.c4}`
//       });

//     } catch (error) {
//       console.error("AI Generation Failed:", error);
//       alert(`AI Error: ${error.message}. Check console for details.`);
//     } finally {
//       setLoadingAI(false);
//     }
//   };

//   // --- CALCULATION LOGIC ---
//   const processResult = () => {
//     const scoreA = calculateScore(ratingsA, priorities);
//     const scoreB = calculateScore(ratingsB, priorities);
//     const winner = getWinner(scoreA.totalScore, scoreB.totalScore);
//     const insight = getInsight(winner, scoreA.totalScore, scoreB.totalScore, priorities, ratingsA, ratingsB, criteriaLabels);
//     setResult({ scoreA, scoreB, winner, optionNames, insight });
//   };

//   const resetDecision = () => {
//     setPriorities({ money: 5, growth: 5, time: 5, stress: 5 });
//     setOptionNames({ A: '', B: '' });
//     setRatingsA({ money: 5, growth: 5, time: 5, stress: 5 });
//     setRatingsB({ money: 5, growth: 5, time: 5, stress: 5 });
//     setResult(null);
//     setCriteriaLabels({
//       money: "💰 Money / Cost",
//       growth: "📈 Value / Benefit",
//       time: "⏳ Time / Effort",
//       stress: "😫 Risk / Stress"
//     });
//   };

//   // 💡 NEW: SAVE HISTORY LOGIC
//   const saveToHistory = () => {
//     if (!result) return;
    
//     const newEntry = {
//       id: Date.now(),
//       date: new Date().toLocaleDateString(),
//       topic: optionNames.A + " vs " + optionNames.B,
//       winner: result.winner === 'A' ? optionNames.A : (result.winner === 'B' ? optionNames.B : "Tie"),
//       scoreA: result.scoreA.totalScore,
//       scoreB: result.scoreB.totalScore
//     };

//     const updatedHistory = [newEntry, ...history];
//     setHistory(updatedHistory);
//     localStorage.setItem('decisionHistory', JSON.stringify(updatedHistory));
//     alert("Decision Saved to History! 💾");
//   };

//   const clearHistory = () => {
//     setHistory([]);
//     localStorage.removeItem('decisionHistory');
//   };

//   return (
//     <DecisionContext.Provider value={{
//       priorities, setPriorities,
//       optionNames, setOptionNames,
//       ratingsA, setRatingsA,
//       ratingsB, setRatingsB,
//       processResult, resetDecision, result,
//       criteriaLabels, generateSmartCriteria, loadingAI,
      
//       // Export History Features
//       history, saveToHistory, clearHistory 
//     }}>
//       {children}
//     </DecisionContext.Provider>
//   );
// };




// src/context/DecisionContext.js
import React, { createContext, useContext, useState } from 'react';
import { calculateScore, getWinner, getInsight } from '../utils/calculateScore';

const DecisionContext = createContext();
export const useDecision = () => useContext(DecisionContext);

// --- API CONFIG ---
const API_KEY = process.env.REACT_APP_OPENROUTER_KEY; 
const BASE_URL = "https://openrouter.ai/api/v1";
const MODEL = "mistralai/mistral-7b-instruct:free"; 

export const DecisionProvider = ({ children }) => {
  // 1. Data State
  const [priorities, setPriorities] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
  const [optionNames, setOptionNames] = useState({ A: '', B: '' });
  const [ratingsA, setRatingsA] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
  const [ratingsB, setRatingsB] = useState({ money: 5, growth: 5, time: 5, stress: 5 });
  const [result, setResult] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);
  
  // 💡 NEW: Store the Scenario Globally so we can save it!
  const [scenario, setScenario] = useState(""); 

  // Default Labels
  const [criteriaLabels, setCriteriaLabels] = useState({
    money: "💰 Money / Cost",
    growth: "📈 Value / Benefit",
    time: "⏳ Time / Effort",
    stress: "😫 Risk / Stress"
  });

  // Load History from Local Storage on startup
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('decisionHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const [toast, setToast] = useState(null); // null or string message

  // 💡 NEW: Helper to show toast
  const triggerToast = (message) => {
    setToast(message);
    // We don't set a timeout here because the Component handles its own 3s life
    // But we need to clear it after to allow re-triggering
    setTimeout(() => setToast(null), 3000); 
  };

  // --- AI GENERATION ---
  const generateSmartCriteria = async (inputScenario) => {
    if (!inputScenario) return;
    
    if (!API_KEY) {
      console.error("❌ CRITICAL ERROR: No API Key found.");
      alert("Missing API Key. Check your .env file.");
      return;
    }

    setLoadingAI(true);

    try {
      const response = await fetch(`${BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Decide AI App"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: "system",
              content: "You are a decision helper. Output ONLY a valid JSON object with exactly 4 keys: 'c1', 'c2', 'c3', 'c4'. The values should be short 2-3 word criteria for making a decision about the user's topic. Do not include any other text."
            },
            {
              role: "user",
              content: `The decision topic is: "${inputScenario}". Give me 4 distinct criteria to judge this decision.`
            }
          ]
        })
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      if (!data.choices || !data.choices.length) throw new Error("No choices returned");

      const content = data.choices[0].message.content;
      const jsonStart = content.indexOf('{');
      const jsonEnd = content.lastIndexOf('}') + 1;
      
      if (jsonStart === -1 || jsonEnd === -1) throw new Error("Invalid JSON from AI");
      
      const cleanJson = content.substring(jsonStart, jsonEnd);
      const parsed = JSON.parse(cleanJson);

      setCriteriaLabels({
        money: `💡 ${parsed.c1}`,
        growth: `📈 ${parsed.c2}`,
        time: `⏳ ${parsed.c3}`,
        stress: `🧩 ${parsed.c4}`
      });

    } catch (error) {
      console.error("AI Failed:", error);
      alert("AI could not generate questions. Using defaults.");
    } finally {
      setLoadingAI(false);
    }
  };

  // --- CALCULATION ---
  const processResult = () => {
    const scoreA = calculateScore(ratingsA, priorities);
    const scoreB = calculateScore(ratingsB, priorities);
    const winner = getWinner(scoreA.totalScore, scoreB.totalScore);
    const insight = getInsight(winner, scoreA.totalScore, scoreB.totalScore, priorities, ratingsA, ratingsB, criteriaLabels);
    setResult({ scoreA, scoreB, winner, optionNames, insight });
  };

  const resetDecision = () => {
    setPriorities({ money: 5, growth: 5, time: 5, stress: 5 });
    setOptionNames({ A: '', B: '' });
    setRatingsA({ money: 5, growth: 5, time: 5, stress: 5 });
    setRatingsB({ money: 5, growth: 5, time: 5, stress: 5 });
    setResult(null);
    setScenario(""); // Clear scenario
    setCriteriaLabels({
      money: "💰 Money / Cost",
      growth: "📈 Value / Benefit",
      time: "⏳ Time / Effort",
      stress: "😫 Risk / Stress"
    });
  };

  // --- HISTORY SAVING (WITH VALIDATION) ---
 const saveToHistory = () => {
    if (!result) return;
    
    if (!optionNames.A || !optionNames.B) {
      triggerToast("⚠️ Please name your options first!"); // 👈 Replaced alert
      return;
    }

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      scenario: scenario || "General Decision", // Save the global scenario
      topic: `${optionNames.A} vs ${optionNames.B}`,
      winner: result.winner === 'A' ? optionNames.A : (result.winner === 'B' ? optionNames.B : "Tie"),
      scoreA: result.scoreA.totalScore,
      scoreB: result.scoreB.totalScore
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('decisionHistory', JSON.stringify(updatedHistory));
    
    triggerToast("Decision Saved Successfully!"); // 👈 Replaced alert
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('decisionHistory');
    triggerToast("History Cleared"); // 👈 Added toast
  };

 return (
    <DecisionContext.Provider value={{
      priorities, setPriorities,
      optionNames, setOptionNames,
      ratingsA, setRatingsA,
      ratingsB, setRatingsB,
      processResult, resetDecision, result,
      criteriaLabels, generateSmartCriteria, loadingAI,
      history, saveToHistory, clearHistory,
      scenario, setScenario,
      
      // 💡 ADD THESE TWO LINES:
      toast, 
      setToast 
    }}>
      {children}
    </DecisionContext.Provider>
  );
};