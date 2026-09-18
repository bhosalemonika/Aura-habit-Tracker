import profileIcon from "../../assets/icons/profile.png";
import settingIcon from "../../assets/icons/setting.png";
import notificationIcon from "../../assets/icons/notif.png";
import streakIcon from "../../assets/icons/streak.png";

function TopBar({ streak, openHome, openCalendar, openProfile, openAchievements }) {
  return (
    <header className="topbar">
      <button className="topbar-brand" type="button" onClick={openHome}>
        Aura
      </button>

      <div className="top-actions">
        <button className="top-streak" type="button" onClick={openAchievements}>
          <img src={streakIcon} alt="" />
          {streak} Day Streak
        </button>

        <button className="top-icon" type="button" aria-label="Open calendar" onClick={openCalendar}>
          <img src={notificationIcon} alt="" />
        </button>

        <button className="top-icon" type="button" aria-label="Open settings" onClick={openProfile}>
          <img src={settingIcon} alt="" />
        </button>

        <button className="avatar-button" type="button" aria-label="Open profile" onClick={openProfile}>
          <img className="top-avatar" src={profileIcon} alt="" />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
