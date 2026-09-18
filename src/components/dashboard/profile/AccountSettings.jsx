import securityIcon from "../../../assets/icons/security.png";
import exportIcon from "../../../assets/icons/download.png";
import logoutIcon from "../../../assets/icons/logout.png";
import accountIcon from "../../../assets/icons/account.png";

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

function AccountSettings({ onLogout }) {
  return (
    <section className="settings-card account-card">
      <div className="settings-header">
        <img src={accountIcon} alt="" className="profile-icon" />
        <h2>Account</h2>
      </div>

      <div className="account-options">
        {accountItems.map(({ icon, title, subtitle, hasArrow, isLogout }) => (
          <button
            type="button"
            key={title}
            className={`account-row ${isLogout ? "logout-row" : ""}`}
            onClick={isLogout ? onLogout : undefined}
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
  );
}

export default AccountSettings;
