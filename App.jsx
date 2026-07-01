import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import OTP from './pages/OTP';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  // Set to true temporarily so you can view the primary Chat Home layout immediately.
  // This will be linked to backend authorization validation state later.
  const isAuthenticated = true; 

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
        <Route path="/verify-otp" element={!isAuthenticated ? <OTP /> : <Navigate to="/" />} />

        {/* Core Live Chat Application Interface */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />

        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
          
