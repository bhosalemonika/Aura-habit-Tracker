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
    const totalCount = notificationItems.length;

    return (
      <section className="notification-page-card">
        <div className="notification-page-header">
          <div>
            <p className="notification-kicker">Alerts</p>
            <h2>Notification Center</h2>
          </div>
          <button type="button" className="notification-action-button">
            Mark all read
          </button>
        </div>

        <div className="notification-summary">
          <div className="notification-summary-item">
            <span>{enabledCount}</span>
            <small>Enabled</small>
          </div>
          <div className="notification-summary-item muted">
            <span>{totalCount - enabledCount}</span>
            <small>Paused</small>
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
