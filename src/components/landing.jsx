import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../assets/herosection.png";
import img2 from "../assets/workshop.png";
import FAQ from "./faq";
import "../cssfiles/landing.css";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container">
        <div className="text-container">
          <p>Empowering the Future of Education!</p>
          <h2>Get the Competitive Edge!!</h2>
          <p>Learn In-Demand Management Skills with KaizenYou</p>
          <div className="button-container">
            <button className="bn-1">Get Started</button>
          </div>
        </div>
        <div className="image-container">
          <img src={img1} alt="Hero Section" loading="lazy" />
        </div>
      </section>

      {/* Sliding Text Section */}
      <div className="sliding-text-container">
        <h1 className="sliding-text">Who are we?</h1>
      </div>

      {/* About Section */}
      <section className="info-section">
        <h2>
          KaizenYou is an online training and learning platform created
          specifically for school students from the field of Commerce.
        </h2>
        <p>
          Through training sessions and workshops, we assist individuals in
          learning several departments inside an organization.
        </p>
      </section>

      {/* Workshop Section */}
      <section className="workshop-section">
        <img src={img2} alt="Workshop" className="im" loading="lazy" />
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
      <section className="head-container">
        <h1 className="choose">Why Choose Us?</h1>
      </section>
      {/* Flip Boxes Section */}
      <section className="flip-boxes-section">
        <div className="flip-box">
          <div className="flip-box-inner">
        <div className="flip-box-front">
          <h3>Interactive Learning Tools</h3>
        </div>
        <div className="flip-box-back">
          <p>Engage students with interactive, lessons, quizess and games  that makes learning fun and effective</p>
          
        </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
        <div className="flip-box-front">
          <h3>Personalised Learning Path</h3>
        </div>
        <div className="flip-box-back">
          <p>Tailor educationalexperiences to meet the unique needs of each student, ensuring no one gets left behind.</p>
        </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
        <div className="flip-box-front">
          <h3>Teacher's Resources</h3>
        </div>
        <div className="flip-box-back">
          <p>Equip educator with the tools they need to create dynamic and impactful lessons.</p>
        </div>
          </div>
        </div>
        <div className="flip-box">
          <div className="flip-box-inner">
        <div className="flip-box-front">
          <h3>Analytics and Reporting</h3>
        </div>
        <div className="flip-box-back">
          <p>Gain insight into student performance and progress with ourcomprehensive analytics platform.</p>
        </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="faq-section">
        <FAQ />
      </section>
      {/* Footer */}
      <footer className="footer">
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
