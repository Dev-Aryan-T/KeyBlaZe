import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Main Typing Test Application
import AtalForm from './components/form/atalform'; // Form Page Component
import './index.css';

// Create root for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Typing Test Application */}
        <Route path="/form" element={<AtalForm />} /> {/* Form Page */}
      </Routes>
    </Router>
  </React.StrictMode>
);
