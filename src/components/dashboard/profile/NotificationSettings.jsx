import notificationIcon from "../../../assets/icons/notif.png";

const notificationItems = [
  {
    key: "habitAdded",
    label: "Habit Added",
    description: "Get notified when a new habit is created",
    timing: "Instant"
  },
  {
    key: "dailyReminders",
    label: "Daily Reminders",
    description: "Get notified for pending habits",
    timing: "Every morning"
  },
  {
    key: "streakMilestones",
    label: "Streak Milestones",
    description: "Celebrate your consistency",
    timing: "On milestone"
  },
  {
    key: "weeklySummary",
    label: "Weekly Summary",
    description: "Detailed performance report",
    timing: "Every Sunday"
  }
];

function NotificationSettings({ notifications, onToggle, variant = "settings" }) {
  const isStandalone = variant === "page";

  if (isStandalone) {
    const enabledCount = Object.values(notifications).filter(Boolean).length;
    const disabledCount = notificationItems.length - enabledCount;

    return (
      <section className="notification-page-card simple-notification-page">
        <div className="notification-page-header">
          <div>
            <p className="notification-kicker">Alerts</p>
            <h2>Notifications</h2>
          </div>

          <div className="notification-status-group">
            <span className="notification-status active">{enabledCount} on</span>
            <span className="notification-status muted">{disabledCount} off</span>
          </div>
        </div>

        <div className="notification-list notification-list-page">
          {notificationItems.map(({ key, label, description, timing }) => (
            <div className={`notification-card ${notifications[key] ? "active" : "inactive"}`} key={key}>
              <div className="notification-copy">
                <div className="notification-title-row">
                  <strong>{label}</strong>
                  <span className="notification-timing">{timing}</span>
                </div>
                <small>{description}</small>
                <span className={`notification-state ${notifications[key] ? "enabled" : "disabled"}`}>
                  {notifications[key] ? "On" : "Off"}
                </span>
              </div>

              <div className="notification-toggle-wrap">
                <button
                  type="button"
                  className={`switch ${notifications[key] ? "on" : ""}`}
                  onClick={() => onToggle(key)}
                  aria-label={`Toggle ${key}`}
                >
                  <span className="switch-thumb" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

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
