import React, { useState, useEffect } from "react";
import { 
    FaUserCircle, FaBook, FaQuestionCircle, FaUpload, FaRobot, FaChartBar, 
    FaSignOutAlt, FaBars, FaSave, FaChevronDown, FaChevronUp, FaEllipsisH
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../dashboards/StudentDashboard.css";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("activeTab") || "profile");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("activeTab");
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className={`dashboard-sidebar ${showMobileMenu ? "mobile-active" : ""}`}>
        <h2 className="dashboard-title">Student Dashboard</h2>

        {/* Mobile Profile Toggle Button */}
        <button className="profile-toggle-btn" onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? <FaChevronUp /> : <FaChevronDown />} Your Profile
        </button>

        {/* Profile Section */}
        <div className={`profile-section ${showProfile ? "show" : "hide"}`}>
          {profile.profilePic ? (
            <img src={profile.profilePic} alt="Profile" className="profile-pic" />
          ) : (
            <FaUserCircle className="profile-icon" />
          )}
          <h3 className="profile-name">{profile.name}</h3>
          <p className="profile-email">{profile.email}</p>
        </div>

        {/* Sidebar Navigation */}
        <ul className="dashboard-menu">
          <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
            <FaUserCircle /> Profile
          </li>
          <li className={activeTab === "courses" ? "active" : ""} onClick={() => setActiveTab("courses")}>
            <FaBook /> Access Courses
          </li>
          <li className={activeTab === "quizzes" ? "active" : ""} onClick={() => setActiveTab("quizzes")}>
            <FaQuestionCircle /> Attempt Quizzes
          </li>
          <li className={activeTab === "submit" ? "active" : ""} onClick={() => setActiveTab("submit")}>
            <FaUpload /> Submit Answers
          </li>
          <li className={activeTab === "ai-help" ? "active" : ""} onClick={() => setActiveTab("ai-help")}>
            <FaRobot /> AI Help
          </li>

          {/* More Options (Hidden items in dropdown on small screens) */}
          <li className="more-options" onClick={() => setShowMoreOptions(!showMoreOptions)}>
            <FaEllipsisH /> More
          </li>

          {showMoreOptions && (
            <div className="more-dropdown">
              <li className={activeTab === "evaluation" ? "active" : ""} onClick={() => setActiveTab("evaluation")}>
                <FaChartBar /> Evaluation
              </li>
            </div>
          )}
        </ul>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content" onClick={() => setShowMobileMenu(false)}>
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={(e) => { e.stopPropagation(); setShowMobileMenu(!showMobileMenu); }}>
          <FaBars />
        </button>

        {activeTab === "profile" && <Profile profile={profile} setProfile={setProfile} />}
        {activeTab === "courses" && <Courses />}
        {activeTab === "quizzes" && <Quizzes />}
        {activeTab === "submit" && <SubmitAnswers />}
        {activeTab === "ai-help" && <AIHelp />}
        {activeTab === "evaluation" && <Evaluation />}
      </div>
    </div>
  );
};

/* Profile Editing Component */
const Profile = ({ profile, setProfile }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleInputChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedProfile({ ...updatedProfile, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    setProfile(updatedProfile);
  };

  return (
    <div className="content-section profile-edit-section">
      <h2>Edit Profile</h2>
      <div className="profile-image">
        {updatedProfile.profilePic ? (
          <img src={updatedProfile.profilePic} alt="Profile" className="profile-pic" />
        ) : (
          <FaUserCircle className="default-pic" />
        )}
        <input type="file" id="profile-pic-upload" accept="image/*" onChange={handleImageUpload} />
        <label htmlFor="profile-pic-upload" className="upload-btn">Upload Picture</label>
      </div>

      <div className="profile-details">
        <label>Name:</label>
        <input type="text" name="name" value={updatedProfile.name} onChange={handleInputChange} />

        <label>Email:</label>
        <input type="email" name="email" value={updatedProfile.email} onChange={handleInputChange} />

        <button className="save-btn" onClick={saveChanges}>
          <FaSave /> Save Changes
        </button>
      </div>
    </div>
  );
};

/* Other Sections */
const Courses = () => <div className="content-section">📚 Here you can access your courses.</div>;
const Quizzes = () => <div className="content-section">❓ Attempt quizzes here.</div>;
const SubmitAnswers = () => <div className="content-section">📤 Submit your answers here.</div>;
const AIHelp = () => <div className="content-section">🤖 AI Help: Ask your questions here.</div>;
const Evaluation = () => <div className="content-section">📊 View your evaluation and progress here.</div>;

export default StudentDashboard;
