import React, { useEffect, useState } from "react";
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaTasks } from "react-icons/fa";
import "../cssfiles/features.css";

const featuresList = [
  {
    icon: <FaBookOpen className="feature-icon" />,
    title: "Interactive Learning Tools",
    description: "Engage with hands-on exercises, quizzes, and real-world examples.",
  },
  {
    icon: <FaUserGraduate className="feature-icon" />,
    title: "Personalized Learning Paths",
    description: "Custom-tailored courses based on your progress and interests.",
  },
  {
    icon: <FaChalkboardTeacher className="feature-icon" />,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with practical experience.",
  },
  {
    icon: <FaTasks className="feature-icon" />,
    title: "Skill-Based Certifications",
    description: "Earn recognized certifications to enhance your career.",
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelector(".features-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`features-section ${isVisible ? "visible" : ""}`}>
      <div className="features-container">
        <h2 className="features-title">Key Features</h2>
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
