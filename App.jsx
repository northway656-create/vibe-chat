import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  // Check if the user is logged in by looking for the token
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* Default Route: Redirects to Login if not authenticated, otherwise to Chat */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/chat" /> : <Navigate to="/login" />} 
        />

        {/* Authentication Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Route */}
        <Route path="/chat" element={<Chat />} />

        {/* Fallback Route: Redirects any unknown URL back to main root */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
