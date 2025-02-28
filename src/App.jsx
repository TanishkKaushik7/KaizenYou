import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/nav";
import Login from "../src/components/login";
import Signup from "../src/components/Sign"; // Import Signup component
import LandingPage from "../src/components/landing";

const App = () => {
  return (
    <Router basename="/KaizenYou">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Added Signup Route */}
      </Routes>
    </Router>
  );
};

export default App;
