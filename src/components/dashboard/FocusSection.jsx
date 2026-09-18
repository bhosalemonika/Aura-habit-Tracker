import HabitCard from "./HabitCard";

function FocusSection({
  habits,
  completeHabit,
  openAddHabit,
  openMyHabits
}) {
  const focusHabits = habits.slice(0, 3);
  return (
    <section className="focus-section">
      <div className="section-heading">
        <div>
          <h2>Today&apos;s Focus</h2>
          <p>Small actions create lasting change.</p>
        </div>
        <button className="view-button" type="button" onClick={openMyHabits}>
          View all
        </button>
      </div>
      {focusHabits.length === 0 ? (
        <button className="empty-state" type="button" onClick={openAddHabit}>
          Add your first habit
        </button>
      ) : (
        focusHabits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completeHabit={completeHabit}
          />
        ))
      )}
    </section>
  );
}
export default FocusSection;
