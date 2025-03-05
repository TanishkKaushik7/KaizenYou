import React, { useState, useEffect } from "react";
import { 
    FaUpload, FaQuestionCircle, FaClipboardCheck, 
    FaChartBar, FaBullhorn, FaCalendarCheck, 
    FaSignOutAlt, FaBars, FaEllipsisH, FaUserCircle 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./teacherdashboard.css";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("activeTab") || "upload-video");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [showProfile, setShowProfile] = useState(false); // State to toggle profile

  const menuItems = [
    { id: "upload-video", icon: <FaUpload />, title: "Upload Video" },
    { id: "upload-assignment", icon: <FaClipboardCheck />, title: "Upload Assignment" },
    { id: "upload-quiz", icon: <FaQuestionCircle />, title: "Upload Quiz" },
    { id: "answer-doubts", icon: <FaClipboardCheck />, title: "Answer Doubts" },
    { id: "check-assignment", icon: <FaClipboardCheck />, title: "Check Assignment" },
    { id: "make-report", icon: <FaChartBar />, title: "Make Report" },
    { id: "make-announcement", icon: <FaBullhorn />, title: "Make Announcement" },
    { id: "attendance", icon: <FaCalendarCheck />, title: "Attendance" }
  ];

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const adjustMenu = () => {
      if (window.innerWidth <= 768) {
        let availableSpace = window.innerHeight - 60;
        let totalHeight = 0;
        let tempVisible = [];
        let tempHidden = [];

        for (let item of menuItems) {
          totalHeight += 50;
          if (totalHeight < availableSpace) {
            tempVisible.push(item);
          } else {
            tempHidden.push(item);
          }
        }
        setVisibleItems(tempVisible);
        setHiddenItems(tempHidden);
      } else {
        setVisibleItems(menuItems);
        setHiddenItems([]);
      }
    };

    adjustMenu();
    window.addEventListener("resize", adjustMenu);
    return () => window.removeEventListener("resize", adjustMenu);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("activeTab");
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className={`dashboard-sidebar ${showMobileMenu ? "mobile-active" : ""}`}>
        <h2 className="dashboard-title">Teacher Dashboard</h2>

        {/* Sidebar Navigation */}
        <ul className="dashboard-menu">
          {visibleItems.map((item) => (
            <li key={item.id} className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)}>
              {item.icon} {item.title}
            </li>
          ))}

          {/* More Options */}
          {hiddenItems.length > 0 && (
            <li className="more-options" onClick={() => setShowMoreOptions(!showMoreOptions)}>
              <FaEllipsisH /> More
            </li>
          )}

          {/* Hidden Menu Items */}
          {showMoreOptions && (
            <div className="more-dropdown">
              {hiddenItems.map((item) => (
                <li key={item.id} className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)}>
                  {item.icon} {item.title}
                </li>
              ))}
            </div>
          )}
        </ul>

        {/* Profile Icon (Only in Responsive Mode) */}
        <div className="profile-icon" onClick={() => setShowProfile(!showProfile)}>
          <FaUserCircle size={30} />
        </div>

        {/* Logout */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      {/* Profile Section (Appears Below Sidebar on Mobile) */}
      {showProfile && (
        <div className="profile-section">
          <h3>John Doe</h3>
          <p>Teacher</p>
          <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        </div>
      )}

      {/* Main Content */}
      <div className="dashboard-content" onClick={() => setShowMobileMenu(false)}>
        <button className="mobile-menu-btn" onClick={(e) => { e.stopPropagation(); setShowMobileMenu(!showMobileMenu); }}>
          <FaBars />
        </button>

        {activeTab === "upload-video" && <UploadVideo />}
        {activeTab === "upload-assignment" && <UploadAssignment />}
        {activeTab === "upload-quiz" && <UploadQuiz />}
        {activeTab === "answer-doubts" && <AnswerDoubts />}
        {activeTab === "check-assignment" && <CheckAssignment />}
        {activeTab === "make-report" && <MakeReport />}
        {activeTab === "make-announcement" && <MakeAnnouncement />}
        {activeTab === "attendance" && <Attendance />}
      </div>
    </div>
  );
};

// Placeholder Components
const UploadVideo = () => <div className="content-section">📤 Upload lecture videos here.</div>;
const UploadAssignment = () => <div className="content-section">📄 Upload assignments for students.</div>;
const UploadQuiz = () => <div className="content-section">❓ Create and upload quizzes.</div>;
const AnswerDoubts = () => <div className="content-section">💬 Answer student doubts.</div>;
const CheckAssignment = () => <div className="content-section">✔️ Check and grade assignments.</div>;
const MakeReport = () => <div className="content-section">📊 Generate student progress reports.</div>;
const MakeAnnouncement = () => <div className="content-section">📢 Make class announcements.</div>;
const Attendance = () => <div className="content-section">📅 Manage and track student attendance.</div>;

export default TeacherDashboard;
