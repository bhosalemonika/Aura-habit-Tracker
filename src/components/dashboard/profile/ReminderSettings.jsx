import announceIcon from "../../../assets/icons/announce.png";
import reminderIcon from "../../../assets/icons/reminder.png";
import priorityIcon from "../../../assets/icons/priority.png";

const reminderStyles = [
  { value: "gentle", icon: reminderIcon, label: "Gentle Nudge" },
  { value: "priority", icon: priorityIcon, label: "High Priority" }
];

function ReminderSettings({ alertSound, reminderStyle, onSoundChange, onStyleChange }) {
  return (
    <section className="settings-card">
      <div className="settings-header">
        <img src={announceIcon} alt="" className="profile-icon" />
        <h2>Reminders</h2>
      </div>

      <div className="reminder-form">
        <label className="select-field">
          <span>Alert Sound</span>
          <select value={alertSound} onChange={(event) => onSoundChange(event.target.value)}>
            <option>Aura Bloom (Default)</option>
            <option>Soft Chime</option>
            <option>Pulse Tone</option>
          </select>
        </label>

        <div className="reminder-style-block">
          <span>Reminder Style</span>
          <div className="style-options">
            {reminderStyles.map(({ value, icon, label }) => (
              <button
                type="button"
                key={value}
                className={`style-option ${reminderStyle === value ? "selected" : ""}`}
                onClick={() => onStyleChange(value)}
              >
                <img src={icon} alt="" className="profile-icon profile-icon-small" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReminderSettings;
