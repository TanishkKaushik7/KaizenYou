import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../assets/herosection.png";
import img2 from "../assets/workshop.png";
import FAQ from "./faq";
import Features from "./features";
import "../cssfiles/landing.css";

const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Mouse Parallax Effect
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 40;
      const y = (e.clientY - innerHeight / 2) / 40;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Fade-In Effect on Scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="container fade-in" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="text-container">
          <p>Empowering the Future of Education!</p>
          <h2>Get the Competitive Edge!!</h2>
          <p>Learn In-Demand Management Skills with KaizenYou</p>
          <div className="button-container">
            <button className="bn-1">Get Started</button>
          </div>
        </div>
        <div
          className="image-container"
          style={{
            transform: `perspective(1200px) translateX(${mousePos.x}px) translateY(${mousePos.y}px) translateZ(50px)`,
          }}
        >
          <img src={img1} alt="Hero Section" loading="lazy" />
        </div>
      </section>

      {/* Sliding Text Section */}
      <div className="sliding-text-container fade-in" ref={(el) => (sectionsRef.current[1] = el)}>
        <h1 className="sliding-text">Who are we?</h1>
      </div>

      {/* About Section */}
      <section className="info-section fade-in" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>
          KaizenYou is an online training and learning platform created
          specifically for school students from the field of Commerce.
        </h2>
        <p>
          Through training sessions and workshops, we assist individuals in
          learning several departments inside an organization.
        </p>
      </section>

      {/* Workshop Section with Parallax Effect */}
      <section className="workshop-section fade-in" ref={(el) => (sectionsRef.current[3] = el)}>
        <div
          className="workshop-image"
          style={{
            transform: `perspective(1200px) translateX(${mousePos.x}px) translateY(${mousePos.y}px) translateZ(80px) scale(1.15)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img src={img2} alt="Workshop" className="im" loading="lazy" />
        </div>
        <div className="txt">
          <p>We go beyond traditional learning by offering dynamic training sessions and workshops.</p>
          <p className="tx">
            Our platform also provides exclusive mentoring sessions with seasoned professionals,
            each boasting over five years of industry experience, to guide and inspire students
            towards their career goals.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="head-container fade-in" ref={(el) => (sectionsRef.current[4] = el)}>
        <h1 className="choose">Why Choose Us?</h1>
      </section>
      <Features />
      
      {/* FAQ Section */}
      <section className="faq-section fade-in" ref={(el) => (sectionsRef.current[5] = el)}>
        <FAQ />
      </section>

      {/* Footer */}
      <footer className="footer fade-in" ref={(el) => (sectionsRef.current[6] = el)}>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/kaizenyou/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/kaizenyou" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/kaizenyou_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2024 KAIZENYOU, ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
