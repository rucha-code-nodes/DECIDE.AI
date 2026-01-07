



// // src/utils/calculateScore.js

// export const calculateScore = (ratings, priorities) => {
//   let totalScore = 0;
//   let breakdown = {};

//   Object.keys(ratings).forEach((key) => {
//     const ratingVal = ratings[key] || 0;
//     const priorityVal = priorities[key] || 0;
//     const weightedScore = ratingVal * priorityVal;
//     totalScore += weightedScore;
//     breakdown[key] = weightedScore;
//   });

//   return { totalScore, breakdown };
// };

// export const getWinner = (scoreA, scoreB) => {
//   if (scoreA > scoreB) return 'A';
//   if (scoreB > scoreA) return 'B';
//   return 'TIE';
// };

// /**
//  * 💡 FEATURE 1: THE DEVIL'S ADVOCATE
//  * Generates a "smart" sentence analyzing the result.
//  */
// export const getInsight = (winner, scoreA, scoreB, priorities, ratingsA, ratingsB) => {
//   if (winner === 'TIE') return "It's a dead heat. Both options are mathematically identical based on your priorities.";

//   const winRatings = winner === 'A' ? ratingsA : ratingsB;
//   const winName = winner === 'A' ? "Option A" : "Option B";
  
//   // 1. Check for "High Cost" Victory (High Priority, Low Rating)
//   // Logic: You said Money is Vital (10), but this option has bad Money (3).
//   const criticalFlaw = Object.keys(priorities).find(key => priorities[key] >= 8 && winRatings[key] <= 4);

//   if (criticalFlaw) {
//     const labels = { money: "Financials", growth: "Growth", time: "Time/Effort", stress: "Stress Levels" };
//     return `⚠️ Caution: ${winName} wins mathematically, BUT it scores poorly on '${labels[criticalFlaw]}', which you marked as vital. Are you sure?`;
//   }

//   // 2. The "Stress" Warning (Specific check for mental health)
//   // Logic: If user hates stress (Priority > 7) but winner is stressful (Stress Rating < 4, assuming 0=High Stress/Bad)
//   if (priorities.stress >= 7 && winRatings.stress <= 3) {
//     return `🧠 Mental Health Alert: This option wins on paper, but it has high stress levels. Is the success worth the burnout?`;
//   }

//   // 3. Clear Winner Message
//   const margin = Math.abs(scoreA - scoreB);
//   if (margin > 50) return `✅ Clear Choice: ${winName} is significantly better aligned with your goals. No contest.`;
  
//   return `⚖️ It's close: ${winName} wins by a small margin. Trust your gut for the final tie-breaker.`;
// };




// src/utils/calculateScore.js

export const calculateScore = (ratings, priorities) => {
  let totalScore = 0;
  let breakdown = {};

  Object.keys(ratings).forEach((key) => {
    const ratingVal = ratings[key] || 0;
    const priorityVal = priorities[key] || 0;
    const weightedScore = ratingVal * priorityVal;
    totalScore += weightedScore;
    breakdown[key] = weightedScore;
  });

  return { totalScore, breakdown };
};

export const getWinner = (scoreA, scoreB) => {
  if (scoreA > scoreB) return 'A';
  if (scoreB > scoreA) return 'B';
  return 'TIE';
};

/**
 * 💡 FEATURE: THE SMART DEVIL'S ADVOCATE
 * Now accepts 'labels' to give accurate advice for ANY scenario.
 */
export const getInsight = (winner, scoreA, scoreB, priorities, ratingsA, ratingsB, labels) => {
  if (winner === 'TIE') return "It's a dead heat. Both options are mathematically identical based on your priorities.";

  const winRatings = winner === 'A' ? ratingsA : ratingsB;
  const winName = winner === 'A' ? "Option A" : "Option B";
  
  // 1. Check for "High Priority, Low Rating" Flaw
  // We look for a factor where Priority is High (>=8) but the Winner is Bad (<=4)
  const criticalFlawKey = Object.keys(priorities).find(key => priorities[key] >= 8 && winRatings[key] <= 4);

  if (criticalFlawKey) {
    // Uses the dynamic label (e.g., "Maintenance") instead of hardcoded "Money"
    const flawName = labels[criticalFlawKey] || criticalFlawKey;
    return `⚠️ Caution: ${winName} wins mathematically, BUT it scores poorly on '${flawName}', which you marked as vital. Are you sure?`;
  }

  // 2. The "Burnout" Warning (If the 4th factor—usually stress/risk—is high)
  // We check the last key ('stress') specifically
  if (priorities.stress >= 7 && winRatings.stress <= 3) {
    const stressLabel = labels.stress || "Stress/Risk";
    return `🧠 Reality Check: This option wins, but it has a very poor rating for '${stressLabel}'. Is the success worth the downside?`;
  }

  // 3. Clear Winner Message
  const margin = Math.abs(scoreA - scoreB);
  if (margin > 50) return `✅ Clear Choice: ${winName} is significantly better aligned with your goals. No contest.`;
  
  return `⚖️ It's close: ${winName} wins by a small margin. Trust your gut for the final tie-breaker.`;
};