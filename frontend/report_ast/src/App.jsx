import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AnalysisProgress from './pages/AnalysisProgress';
import ReportViewer from './pages/ReportViewer';
import AuditHistory from './pages/AuditHistory';
import './index.css';

// A simple navigation for testing purposes
const NavLinks = () => (
  <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', display: 'flex', gap: '15px', justifyContent: 'center', zIndex: 9999 }}>
    <Link to="/" style={{ color: '#39ff14' }}>Landing</Link>
    <Link to="/login" style={{ color: '#39ff14' }}>Login</Link>
    <Link to="/dashboard" style={{ color: '#39ff14' }}>Dashboard</Link>
    <Link to="/progress" style={{ color: '#39ff14' }}>Progress</Link>
    <Link to="/report" style={{ color: '#39ff14' }}>Report Viewer</Link>
    <Link to="/history" style={{ color: '#39ff14' }}>History</Link>
  </div>
);

function App() {
  return (
    <Router>
      <NavLinks />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/progress" element={<AnalysisProgress />} />
        <Route path="/report" element={<ReportViewer />} />
        <Route path="/history" element={<AuditHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
