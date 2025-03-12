import React, { useState, useEffect } from "react";
import { 
    FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaBullhorn, FaUsers, 
    FaSignOutAlt, FaBars, FaUserCircle 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./schooldashboard.css";

const SchoolDashboard = () => {
    const [activeTab, setActiveTab] = useState(() => localStorage.getItem("schoolActiveTab") || "monitor-progress");
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const navigate = useNavigate();

    const menuItems = [
        { id: "monitor-progress", icon: <FaClipboardList />, title: "Monitor Progress" },
        { id: "attendance", icon: <FaUsers />, title: "Attendance" },
        { id: "manage-classes", icon: <FaChalkboardTeacher />, title: "Manage Classes" },
        { id: "all-students", icon: <FaUserGraduate />, title: "All Students" },
        { id: "announcements", icon: <FaBullhorn />, title: "Make Announcements" },
        { id: "trainers", icon: <FaChalkboardTeacher />, title: "View Trainers" },
    ];

    useEffect(() => {
        localStorage.setItem("schoolActiveTab", activeTab);
    }, [activeTab]);

    const handleLogout = () => {
        localStorage.removeItem("schoolActiveTab");
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <nav className={`dashboard-sidebar ${showMobileMenu ? "mobile-active" : ""}`}>
                <h2 className="dashboard-title">School Dashboard</h2>

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
                    <FaUserCircle size={50} />
                    <h3>Admin Name</h3>
                    <p>School Administrator</p>
                    <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
                </div>
            )}

            {/* Main Content */}
            <div className="dashboard-content" onClick={() => setShowMobileMenu(false)}>
                <button className="mobile-menu-btn" onClick={(e) => { e.stopPropagation(); setShowMobileMenu(!showMobileMenu); }}>
                    <FaBars />
                </button>

                {activeTab === "monitor-progress" && <MonitorProgress />}
                {activeTab === "attendance" && <Attendance />}
                {activeTab === "manage-classes" && <ManageClasses />}
                {activeTab === "all-students" && <AllStudents />}
                {activeTab === "announcements" && <MakeAnnouncements />}
                {activeTab === "trainers" && <ViewTrainers />}
            </div>
        </div>
    );
};

// 📌 Placeholder Components for Each Section
const MonitorProgress = () => <div className="content-section">📊 Track student progress.</div>;
const Attendance = () => <div className="content-section">📅 Manage student attendance.</div>;
const ManageClasses = () => <div className="content-section">🏫 Organize and manage classes.</div>;
const AllStudents = () => <div className="content-section">🎓 View all students.</div>;
const MakeAnnouncements = () => <div className="content-section">📢 Post school announcements.</div>;
const ViewTrainers = () => <div className="content-section">👨‍🏫 View trainers and instructors.</div>;

export default SchoolDashboard;
