// src/pages/History.js
import React from 'react';
import { useDecision } from '../context/DecisionContext';
import { useNavigate } from 'react-router-dom';
import './History.css';

const History = () => {
  const { history, clearHistory } = useDecision();
  const navigate = useNavigate();

  return (
    <div className="history-container animate-fade-in">
      <div className="history-header">
        <h1 className="page-title">Your Decisions</h1>
        {history.length > 0 && (
          <button className="btn-secondary" onClick={clearHistory}>
            Clear History 🗑️
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📂</div>
          <h3>No decisions saved yet.</h3>
          <p>Go make some tough choices and save them here!</p>
          <button className="btn-primary" onClick={() => navigate('/decision')}>
            Start New Decision 🚀
          </button>
        </div>
      ) : (
        <div className="history-grid">
          {history.map((item) => (
            <div key={item.id} className="card-3d history-card">
              <div className="history-date">{item.date}</div>
              
              {/* 💡 NEW: Show the Topic/Scenario nicely */}
              <h4 style={{color: '#948979', margin: '0.5rem 0 0 0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px'}}>
                {item.scenario}
              </h4>
              
              <h3 className="history-topic" style={{marginTop: '0.2rem'}}>{item.topic}</h3>
              
              <div className="history-winner">
                <span>Winner:</span>
                <span className="winner-name">🏆 {item.winner}</span>
              </div>
              <div className="history-scores">
                <span className="score-badge">A: {item.scoreA}</span>
                <span className="vs-small">vs</span>
                <span className="score-badge">B: {item.scoreB}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;