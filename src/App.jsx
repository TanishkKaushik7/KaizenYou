import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../src/components/nav";
import Login from "../src/components/login";
import Signup from "../src/components/Sign";
import LandingPage from "../src/components/landing";
import StudentDashboard from "../src/components/dashboards/StudentDashboards";
import TeacherDashboard from "../src/components/dashboards/teacherdashboard";
import AdminDashboard from "../src/components/dashboards/AdminDashboard";
import SchoolDashboard from "../src/components/dashboards/SchoolDashboard";

const App = () => {
  return (
    <Router basename="/KaizenYou">
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Hide Navbar for dashboard pages
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Navbar only visible outside dashboards */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/school" element={<SchoolDashboard />} />
      </Routes>
    </>
  );
};

export default App;
