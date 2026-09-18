import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ProfilePage.css";
import ProfileHero from "./profile/ProfileHero";
import NotificationSettings from "./profile/NotificationSettings";
import ReminderSettings from "./profile/ReminderSettings";
import AppearanceSettings from "./profile/AppearanceSettings";
import AccountSettings from "./profile/AccountSettings";

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

  const logout = () => {
    localStorage.removeItem("auraUser");
    localStorage.removeItem("auraEmail");
    localStorage.removeItem("auraName");
    navigate("/login", { replace: true });
  };

  return (
    <section className="profile-page">
      <ProfileHero name={name} email={email} />

      <div className="profile-settings-grid">
        <NotificationSettings
          notifications={notifications}
          onToggle={toggleNotification}
        />
        <ReminderSettings
          alertSound={alertSound}
          reminderStyle={reminderStyle}
          onSoundChange={setAlertSound}
          onStyleChange={setReminderStyle}
        />
        <AppearanceSettings theme={theme} onThemeChange={setTheme} />
        <AccountSettings onLogout={logout} />
      </div>
    </section>
  );
}

export default ProfilePage;
