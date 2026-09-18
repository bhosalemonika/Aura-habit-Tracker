import {
  CheckCircle2,
  Flame
} from "lucide-react";
import { habitIcons } from "../../data/habitOptions";
import pen from "../../assets/icons/pencil.png";
import batch from "../../assets/icons/batch.png";

function getCategoryClass(category) {
  return category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function HabitCard({ habit, completeHabit, openEditHabit }) {
  const habitName = habit.name;
  const categoryName = habit.category;
  const habitIcon = habitIcons.find((icon) => icon.id === habit.icon) || habitIcons[0];
  const isCompleted = Boolean(habit.completed);

  return (
    <div className={`habit-card ${isCompleted ? "is-completed" : ""}`}>
      <div className="habit-top">
        <div className="habit-icon">
          <img
            src={habitIcon.src}
            alt=""
          />
        </div>

        <button
          className="icon-button"
          type="button"
          aria-label={`Edit ${habitName}`}
          onClick={() => openEditHabit?.(habit)}
        >
          <img src={pen} alt="" />
        </button>
      </div>

      <span className={`category-badge category-${getCategoryClass(categoryName)}`}>
        {categoryName}
      </span>

      <h2>{habitName}</h2>

      <div className="habit-streak">
        <Flame size={15} strokeWidth={2.4} aria-hidden="true" />
        <span>{habit.streak || 0} days streak</span>
      </div>

      <button
        type="button"
        className={isCompleted ? "complete-button done" : "complete-button"}
        aria-label={isCompleted ? `Undo ${habitName}` : `Complete ${habitName}`}
        onClick={() => completeHabit?.(habit.id)}
      >
        {isCompleted ? (
          <img src={batch} alt="" />
        ) : (
          <CheckCircle2 size={19} strokeWidth={2.5} aria-hidden="true" />
        )}

        <span>{isCompleted ? "Done for Today" : "Complete"}</span>
      </button>
    </div>
  );
}

export default HabitCard;
