import React, { useState } from "react";
import "../cssfiles/nav.css";

const RadioInputs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#Home">KaizenYou</a>
          </div>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
          </button>

          <ul className={`menu ${menuOpen ? "active" : ""}`}>
            {["Home", "About Us", "Events"].map((item) => (
              <li key={item}>
                <a href={item === "About Us" ? "/about" : `#${item.replace(/\s+/g, "")}`}
                onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}

            <li>
            <button className="login-btn">Login</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="button">
        <a href="#Home" aria-label="Scroll to top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default RadioInputs;
