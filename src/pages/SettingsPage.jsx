import { useState } from "react";
import "../css/ProfilePage.css";
import NotificationSettings from "../components/dashboard/profile/NotificationSettings";
import ReminderSettings from "../components/dashboard/profile/ReminderSettings";
import AppearanceSettings from "../components/dashboard/profile/AppearanceSettings";
import AccountSettings from "../components/dashboard/profile/AccountSettings";

function SettingsPage() {
  const [notifications, setNotifications] = useState({
    habitAdded: true,
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

  return (
    <section className="settings-page">
      <div className="settings-page-header">
        <div>
          <p className="settings-kicker">Preferences</p>
          <h1>Settings</h1>
        </div>
      </div>

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
        <AccountSettings onLogout={() => {}} />
      </div>
    </section>
  );
}

export default SettingsPage;
