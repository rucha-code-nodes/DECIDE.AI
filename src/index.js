// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Import the global styles we just made
// We will create this Context file in the next step, but importing it now creates the structure
import { DecisionProvider } from './context/DecisionContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DecisionProvider> {/* Logic State lives here */}
      <BrowserRouter> {/* Routing lives here */}
        <App />
      </BrowserRouter>
    </DecisionProvider>
  </React.StrictMode>
);


// C:\StopOverthinking\frontend\src\App.css
// C:\StopOverthinking\frontend\src\App.js
// C:\StopOverthinking\frontend\src\App.test.js
// C:\StopOverthinking\frontend\src\index.css
// C:\StopOverthinking\frontend\src\index.js
// C:\StopOverthinking\frontend\src\reportWebVitals.js
// C:\StopOverthinking\frontend\src\setupTests.js