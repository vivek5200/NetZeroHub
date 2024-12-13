import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BusinessDashboard from './pages/BusinessDashboard';
import OrganizationsDashboard from './pages/OrganizationsDashboard';

const App = () => {
  const [token, setToken] = useState(null); // State to store the token

  const handleLogin = (token) => {
    console.log('Logged in with token:', token);
    setToken(token); // Store the token in state
    localStorage.setItem('token', token); // Store the token in local storage
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add the Home route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/business-dashboard" element={<BusinessDashboard />} />
        <Route path="/organization-dashboard" element={<OrganizationsDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;