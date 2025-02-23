import React, { useState } from "react";
import "../cssfiles/faq.css"; 

const FAQ = () => {
  const faqs = [
    { question: "What is KaizenYou?", answer: "KaizenYou is an online training and learning platform specifically designed for students in Commerce and Management. Our platform emphasizes continuous improvement and offers a variety of educational tools and resources." },
    { question: "what kind of courses does KaizenYou offers?", answer: "We offer a comprehensive curriculum including courses in digital marketing, human resource management, finance, and accounting. Our platform is designed to help students gain valuable skills in the Management and Commerce domains." },
    { question: "How does KaizenYou support student learning?", answer: "No, KaizenYou provides free educational resources, but premium content may be available for a fee." },
    { question: "What resources are available for educators on KaizenYou?",answer: "Educators have access to lesson planning tools, professional development resources, and classroom management software to enhance their teaching and support student success."},
    { question: "How can I get a hands-on experience with KaizenYou?", answer: "Students can participate in both paid and unpaid internships offered through our platform. These internships provide practical experience and help develop essential skills."},
    { question: "How can I contact KaizenYou for support or inquiries?", answer: "You can reach us via email at tokaizenyou@gmail.com, call us at 084230 07905, or visit us at our office in Lucknow, Uttar Pradesh, India."},
    { question: "What is the mission of KaizenYou?", answer: "Our mission is to revolutionize education through innovative technology, providing high-quality digital solutions that empower educators and inspire students to reach their full potential."},
    { question: "What makes KaizenYou different from other edtech platforms?", answer: "KaizenYou integrates the philosophy of continuous improvement into our platform, offering dynamic and personalized learning experiences tailored to the needs of Commerce and Management students."},

];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>+</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
