// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDecision } from './context/DecisionContext'; // 1. Import Context Hook

// Imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Decision from './pages/Decision'; 
import Result from './pages/Result';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import History from './pages/History';
import Toast from './components/Toast'; // 2. Import Toast Component

function App() {
  // 3. Extract toast state from Context
  // Note: App is inside DecisionProvider (in index.js), so this works!
  const { toast, setToast } = useDecision();

  return (
    <div className="app-container">
      <Navbar />
      
      {/* 4. Conditionally Render Toast */}
      {toast && (
        <Toast 
          message={toast} 
          onClose={() => setToast(null)} 
        />
      )}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;