import React, { useState, useEffect } from "react";
import { 
    FaUserTie, FaVideo, FaBullhorn, FaCogs, FaChartLine, 
    FaSignOutAlt, FaBars, FaEllipsisH, FaUserCircle 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./admindashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("adminActiveTab") || "school-trainers");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const menuItems = [
    { id: "school-trainers", icon: <FaUserTie />, title: "School Trainers" },
    { id: "online-videos", icon: <FaVideo />, title: "Online Videos" },
    { id: "announcements", icon: <FaBullhorn />, title: "Announcements" },
    { id: "settings", icon: <FaCogs />, title: "Settings" },
    { id: "progress", icon: <FaChartLine />, title: "Progress" }
  ];

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("adminActiveTab", activeTab);
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("adminActiveTab");
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className={`dashboard-sidebar ${showMobileMenu ? "mobile-active" : ""}`}>
        <h2 className="dashboard-title">Admin Dashboard</h2>
        
        <ul className="dashboard-menu">
          {menuItems.map((item) => (
            <li key={item.id} className={activeTab === item.id ? "active" : ""} onClick={() => setActiveTab(item.id)}>
              {item.icon} {item.title}
            </li>
          ))}
        </ul>
        
        
        {/* Logout */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      {/* Profile Section (Appears Below Sidebar on Mobile) */}
      {showProfile && (
        <div className="profile-section">
          <h3>Admin Name</h3>
          <p>Administrator</p>
          <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        </div>
      )}

      {/* Main Content */}
      <div className="dashboard-content" onClick={() => setShowMobileMenu(false)}>
        <button className="mobile-menu-btn" onClick={(e) => { e.stopPropagation(); setShowMobileMenu(!showMobileMenu); }}>
          <FaBars />
        </button>

        {activeTab === "school-trainers" && <SchoolTrainers />}
        {activeTab === "online-videos" && <OnlineVideos />}
        {activeTab === "announcements" && <Announcements />}
        {activeTab === "settings" && <Settings />}
        {activeTab === "progress" && <Progress />}
      </div>
    </div>
  );
};

// Placeholder Components
const SchoolTrainers = () => <div className="content-section">👨‍🏫 Manage school trainers.</div>;
const OnlineVideos = () => <div className="content-section">🎥 Manage and upload online videos.</div>;
const Announcements = () => <div className="content-section">📢 Make important announcements.</div>;
const Settings = () => <div className="content-section">⚙️ Adjust system settings.</div>;
const Progress = () => <div className="content-section">📈 Track overall progress and reports.</div>;

export default AdminDashboard;