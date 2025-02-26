import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "../cssfiles/nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // React Router navigation

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#Home">KaizenYou</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "menu-toggle" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          {["Home", "About Us", "Events"].map((item) => (
            <li key={item}>
              <a
                href={item === "About Us" ? "/about" : `#${item.replace(/\s+/g, "")}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}

          <li>
           
          </li> <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
