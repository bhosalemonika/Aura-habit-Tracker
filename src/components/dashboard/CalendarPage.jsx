function CalendarPage({ habits }) {
  const scheduledHabits = [...habits].sort((first, second) =>
    (first.reminderTime || "").localeCompare(second.reminderTime || ""));
  return (
    <section className="simple-page">
      <h1>Calendar</h1>
      <p>Today&apos;s habit schedule.</p>

      <div className="simple-list">
        {scheduledHabits.map((habit) => (
          <div className="simple-row" key={habit.id}>
            <div>
              <strong>{habit.name}</strong>
              <span>{habit.category} - {habit.frequency}</span>
            </div>
            <b>{habit.reminderTime || "Anytime"}</b>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CalendarPage;
