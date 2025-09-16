import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TimetableGeneration from './components/TimetableGeneration';
import ReviewApprove from './components/ReviewApprove';
import ViewTimetables from './components/ViewTimetables';
import LeaveRequests from './components/LeaveRequests';
import Preferences from './components/Preferences';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/dashboard" replace /> : 
              <Login setIsAuthenticated={setIsAuthenticated} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
              <Dashboard /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/timetable-generation" 
            element={
              isAuthenticated ? 
              <TimetableGeneration /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/view-timetables" 
            element={
              isAuthenticated ? 
              <ViewTimetables /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/review-approve" 
            element={
              isAuthenticated ? 
              <ReviewApprove /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/leave-requests" 
            element={
              isAuthenticated ? 
              <LeaveRequests /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="/preferences" 
            element={
              isAuthenticated ? 
              <Preferences /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;