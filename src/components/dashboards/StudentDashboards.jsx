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
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: null,
  });

  const menuItems = [
    { id: "profile", icon: <FaUserCircle />, title: "Profile" },
    { id: "courses", icon: <FaBook />, title: "Access Courses" },
    { id: "quizzes", icon: <FaQuestionCircle />, title: "Attempt Quizzes" },
    { id: "submit", icon: <FaUpload />, title: "Submit Answers" },
    { id: "ai-help", icon: <FaRobot />, title: "AI Help" },
    { id: "evaluation", icon: <FaChartBar />, title: "Evaluation" }
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
          totalHeight += 50; // Approx height per item
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
        <h2 className="dashboard-title">Student Dashboard</h2>

        {/* Mobile Profile Toggle */}
        {/* <button className="profile-toggle-btn" onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? <FaChevronUp /> : <FaChevronDown />} Your Profile
        </button> */}

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

          {/* Hidden Menu Items inside More */}
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

        {/* Logout */}
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

/* Profile Component */
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
const Courses = () => <div className="content-section">📚 Access your courses here.</div>;
const Quizzes = () => <div className="content-section">❓ Attempt quizzes here.</div>;
const SubmitAnswers = () => <div className="content-section">📤 Submit your answers here.</div>;
const AIHelp = () => <div className="content-section">🤖 AI Help: Ask your questions.</div>;
const Evaluation = () => <div className="content-section">📊 View your evaluation and progress.</div>;

export default StudentDashboard;
