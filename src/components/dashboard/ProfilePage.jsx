import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/profile.png";
import notificationIcon from "../../assets/icons/notif.png";
import securityIcon from "../../assets/icons/security.png";
import exportIcon from "../../assets/icons/download.png";
import actionIcon from "../../assets/icons/priority.png";
import reminder from "../../assets/icons/reminder.png";
import completedIcon from "../../assets/icons/completed.png";
import logoutIcon from "../../assets/icons/logout.png";
import account from "../../assets/icons/account.png";
import achieve from "../../assets/icons/achieve.png";
import  announce from "../../assets/icons/announce.png";
import "../../css/ProfilePage.css";


function ProfilePage({ user }) {
  const navigate = useNavigate();
  const name = user?.name || user?.fullName || localStorage.getItem("auraName") || "Alex Rivera";
  const email = user?.email || "alex.rivera@aura.io";

  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    streakMilestones: true,
    weeklySummary: false
  });
  const [alertSound, setAlertSound] = useState("Aura Bloom (Default)");
  const [reminderStyle, setReminderStyle] = useState("gentle");
  const [theme, setTheme] = useState("dark");

  const toggleNotification = (key) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key]
    }));
  };

  const toggleButton = (key) => (
    <button
      type="button"
      className={`switch ${notifications[key] ? "on" : ""}`}
      onClick={() => toggleNotification(key)}
      aria-label={`Toggle ${key}`}
    >
      <span className="switch-thumb" />
    </button>
  );

  const logout = () => {
    localStorage.removeItem("auraUser");
    localStorage.removeItem("auraEmail");
    localStorage.removeItem("auraName");
    navigate("/login", { replace: true });
  };

  const notificationItems = [
    {
      key: "dailyReminders",
      label: "Daily Reminders",
      description: "Get notified for pending habits"
    },
    {
      key: "streakMilestones",
      label: "Streak Milestones",
      description: "Celebrate your consistency"
    },
    {
      key: "weeklySummary",
      label: "Weekly Summary",
      description: "Detailed performance report"
    }
  ];

  const reminderStyles = [
    { value: "gentle", icon: reminder, label: "Gentle Nudge" },
    { value: "priority", icon: actionIcon, label: "High Priority" }
  ];

  const themeOptions = [
    { value: "dark", label: "AURA DARK", className: "" },
    { value: "light", label: "LIGHT MODE", className: "light" }
  ];

  const accountItems = [
    {
      icon: securityIcon,
      title: "Security & Password",
      subtitle: "Update credentials",
      hasArrow: true,
      isLogout: false
    },
    {
      icon: exportIcon,
      title: "Export Data",
      subtitle: "Download habit history",
      hasArrow: true,
      isLogout: false
    },
    {
      icon: logoutIcon,
      title: "Logout",
      subtitle: "Sign out of your session",
      hasArrow: false,
      isLogout: true
    }
  ];

  return (
    <section className="profile-page">
      <div className="profile-hero">
        <div className="profile-avatar-wrap">
          <img src={profileImage} alt="Profile" className="profile-avatar" />
        </div>

        <div className="profile-header-main">
          <h1>{name}</h1>
          <p>{email}</p>

          <div className="profile-badges">
            <span className="profile-badge premium">Premium Member</span>
            <span className="profile-badge streak">Top 5% Habit Streak</span>
          </div>
        </div>

        <button type="button" className="edit-profile-button">
          Edit Profile
        </button>
      </div>

      <div className="profile-settings-grid">
        <section className="settings-card">
          <div className="settings-header">
            <img src={notificationIcon} alt="" className="profile-icon" />
            <h2>Notifications</h2>
          </div>

          <div className="notification-list">
            {notificationItems.map(({ key, label, description }) => (
              <div className="setting-row" key={key}>
                <div className="setting-copy">
                  <span>{label}</span>
                  <small>{description}</small>
                </div>
                {toggleButton(key)}
              </div>
            ))}
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-header">
            <img src={announce} alt="" className="profile-icon" />
            <h2>Reminders</h2>
          </div>

          <div className="reminder-form">
            <label className="select-field">
              <span>Alert Sound</span>
              <select
                value={alertSound}
                onChange={(event) => setAlertSound(event.target.value)}
              >
                <option>Aura Bloom (Default)</option>
                <option>Soft Chime</option>
                <option>Pulse Tone</option>
              </select>
            </label>

            <div className="reminder-style-block">
              <span>Reminder Style</span>
              <div className="style-options">
                {reminderStyles.map(({ value, icon: Icon, label }) => (
                  <button
                    type="button"
                    key={value}
                    className={`style-option ${reminderStyle === value ? "selected" : ""}`}
                    onClick={() => setReminderStyle(value)}
                  >
                    <img src={Icon} alt="" className="profile-icon profile-icon-small" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="settings-card appearance-card">
          <div className="settings-header">
            <img src={achieve} alt="" className="profile-icon" />
            <h2>Appearance</h2>
          </div>

          <div className="theme-box">
            <div className="theme-header">
              <span>Dynamic Theme</span>
              <span className="theme-tag">LOCKED</span>
            </div>

            <div className="theme-toggle-panel">
              {themeOptions.map(({ value, label, className }) => (
                <button
                  type="button"
                  key={value}
                  className={`theme-option ${className} ${theme === value ? "selected" : ""}`}
                  onClick={() => setTheme(value)}
                >
                  <span className="theme-preview-bars" aria-hidden="true">
                    <span className="theme-preview-bar theme-preview-bar-main" />
                    <span className="theme-preview-bar theme-preview-bar-secondary" />
                  </span>
                  {theme === value && (
                    <span className="theme-check" aria-hidden="true">
                      <img src={completedIcon} alt="" className="profile-icon profile-icon-small" />
                    </span>
                  )}
                  <span className="theme-label">{label}</span>
                </button>
              ))}
            </div>

            <p className="appearance-note">
              Theme customization is reserved for Premium users. Aura Dark is the optimized default.
            </p>
          </div>
        </section>

        <section className="settings-card account-card">
          <div className="settings-header">
            <img src={account} alt="" className="profile-icon" />
            <h2>Account</h2>
          </div>

          <div className="account-options">
            {accountItems.map(({ icon, title, subtitle, hasArrow, isLogout }) => (
              <button
                type="button"
                key={title}
                className={`account-row ${isLogout ? "logout-row" : ""}`}
                onClick={isLogout ? logout : undefined}
              >
                <div className="account-label-wrap">
                  <img src={icon} alt="" className="profile-icon" />
                  <div>
                    <strong>{title}</strong>
                    <small>{subtitle}</small>
                  </div>
                </div>
                {hasArrow && <span className="account-arrow" aria-hidden="true">&#8250;</span>}
              </button>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProfilePage;
