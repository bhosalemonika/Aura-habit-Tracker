import meditationIcon from "../../assets/icons/meditation.png";
import exerciseIcon from "../../assets/icons/exercise.png";
import hydrationIcon from "../../assets/icons/hydration.png";
import readingIcon from "../../assets/icons/reading.png";
import reviewIcon from "../../assets/icons/review.png";
import completeIcon from "../../assets/icons/completed.png";
import checkIcon from "../../assets/icons/comp.png";

const iconMap = {
  meditation: meditationIcon,
  exercise: exerciseIcon,
  hydration: hydrationIcon,
  reading: readingIcon,
  review: reviewIcon
};

function HabitCard({
  habit,
  completeHabit
}) {
  const title = habit.name || "Untitled Habit";
  const actionText = habit.completed
    ? "Done today"
    : habit.reminderTime || habit.frequency;

  return (
    <div className={`habit-card ${habit.completed ? "completed" : ""}`}>
      <div className="habit-icon">
        <img
          src={iconMap[habit.icon] || meditationIcon}
          alt=""
        />
      </div>

      <div className="habit-info">
        <h3>{title}</h3>
        <span>
          <b>{habit.category || "General"}</b>
          {actionText}
        </span>
      </div>

      <button
        className={`habit-check ${habit.completed ? "completed" : ""}`}
        type="button"
        aria-label={`Mark ${title}`}
        onClick={() => completeHabit(habit.id)}
      >
        <img
          src={habit.completed ? completeIcon : checkIcon}
          alt=""
        />
      </button>
    </div>
  );
}

export default HabitCard;
