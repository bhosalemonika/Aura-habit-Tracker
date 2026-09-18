import AddHabitTile from "./AddHabitTile";
import HabitCard from "./HabitCard";

function HabitGrid({ habits, onAddHabit, onCompleteHabit, onEditHabit }) {
  return (
    <div className="habit-grid">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          completeHabit={onCompleteHabit}
          openEditHabit={onEditHabit}
        />
      ))}

      <AddHabitTile onClick={onAddHabit} />
    </div>
  );
}

export default HabitGrid;
