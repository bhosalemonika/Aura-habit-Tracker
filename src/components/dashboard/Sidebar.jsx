import homeIcon from "../../assets/icons/home.png";
import habitsIcon from "../../assets/icons/habits.png";
import calendarIcon from "../../assets/icons/calendar.png";
import achievementsIcon from "../../assets/icons/achievements.png";
import profileIcon from "../../assets/icons/profile.png";
import addIcon from "../../assets/icons/addI.png";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: homeIcon
  },
  {
    id: "my-habits",
    label: "My Habits",
    icon: habitsIcon
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: calendarIcon
  },
  {
    id: "achievements",
    label: "Achievements",
    icon: achievementsIcon
  },
  {
    id: "profile",
    label: "Profile",
    icon: profileIcon
  }
];

function Sidebar({ activePage, openAddHabit, openPage }) {
  const isActive = (itemId) =>
    activePage === itemId ||
    (itemId === "my-habits" && activePage === "add-habit");

  return (
    <aside className="sidebar">
      <button className="new-habit-button" type="button" onClick={openAddHabit}>
        <img src={addIcon} alt="" />
        <span>New Habit</span>
      </button>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${isActive(item.id) ? "active" : ""}`}
            type="button"
            onClick={() => openPage(item.id)}
          >
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
