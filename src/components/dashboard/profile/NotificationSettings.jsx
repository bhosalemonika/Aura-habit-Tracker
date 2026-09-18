import notificationIcon from "../../../assets/icons/notif.png";

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

function NotificationSettings({ notifications, onToggle }) {
  return (
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
            <button
              type="button"
              className={`switch ${notifications[key] ? "on" : ""}`}
              onClick={() => onToggle(key)}
              aria-label={`Toggle ${key}`}
            >
              <span className="switch-thumb" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NotificationSettings;
