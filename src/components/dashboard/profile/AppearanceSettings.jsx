import achieveIcon from "../../../assets/icons/achieve.png";
import completedIcon from "../../../assets/icons/completed.png";

const themeOptions = [
  { value: "dark", label: "AURA DARK", className: "" },
  { value: "light", label: "LIGHT MODE", className: "light" }
];

function AppearanceSettings({ theme, onThemeChange }) {
  return (
    <section className="settings-card appearance-card">
      <div className="settings-header">
        <img src={achieveIcon} alt="" className="profile-icon" />
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
              onClick={() => onThemeChange(value)}
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
  );
}

export default AppearanceSettings;
