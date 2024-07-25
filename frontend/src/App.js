import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import DonationPage from './pages/Donate';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Donations from './components/Donations/Donations';
import Projects from './components/Projects/Projects';
import Volunteers from './components/Volunteers/Volunteers';
import Events from './components/Events/Events';
import Beneficiaries from './components/Beneficiaries/Beneficiaries';
import Reports from './components/Reports/Reports';
import DashboardOverview from './components/Overview/Overview';
import Dashboard from './pages/DashBoard';
// This is a placeholder for the actual authentication check
const isAuthenticated = () => {
  // In the future, this will check if the user is logged in
  return true;
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardOverview />} />
            <Route path="donations" element={<Donations />} />
            <Route path="projects" element={<Projects />} />
            <Route path="volunteers" element={<Volunteers />} />
            <Route path="events" element={<Events />} />
            <Route path="beneficiaries" element={<Beneficiaries />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;