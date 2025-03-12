import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../cssfiles/nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.location.reload(); // Refresh if already on the same page
    } else {
      navigate(path);
    }
    setMenuOpen(false); // Close menu for better UX on mobile
  };

  return (
    <nav>
      <div className="navbar">
        {/* Logo - Navigates to LandingPage and refreshes if already there */}
        <div className="logo" onClick={() => handleNavigation("/")}>
          <span>KaizenYou</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className={`hamburger ${menuOpen ? "menu-toggle" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Menu Items */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/about")}>About Us</li>
          <li onClick={() => handleNavigation("/events")}>Events</li>

          {/* Login Button */}
          <li>
            <button className="login-btn" onClick={() => handleNavigation("/login")}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
