import meditationIcon from "../../assets/icons/meditation.png";
import exerciseIcon from "../../assets/icons/exercise.png";
import hydrationIcon from "../../assets/icons/hydration.png";
import readingIcon from "../../assets/icons/reading.png";
import reviewIcon from "../../assets/icons/review.png";

const iconMap = {
  meditation: meditationIcon,
  exercise: exerciseIcon,
  hydration: hydrationIcon,
  reading: readingIcon,
  review: reviewIcon
};

function UpNext({ habits, openCalendar }) {
  const upcoming = habits
    .filter((habit) => !habit.completed)
    .sort((first, second) =>
      (first.reminderTime || "").localeCompare(second.reminderTime || "")
    )
    .slice(0, 2);

  return (
    <div className="up-next">
      <div className="section-heading">
        <h2>Up Next</h2>
        <button className="view-button" type="button" onClick={openCalendar}>
          View all
        </button>
      </div>

      {upcoming.length === 0 ? (
        <div className="next-card">
          <div>
            <strong>All clear</strong>
            <small>No pending habits today</small>
          </div>
        </div>
      ) : (
        upcoming.map((habit) => (
          <div className="next-card" key={habit.id}>
            <img src={iconMap[habit.icon] || meditationIcon} alt="" />
            <div>
              <strong>{habit.name}</strong>
              <small>{habit.reminderTime || "Anytime today"}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default UpNext;
