function Reminder({ value, saveAnswer }) {
  return (
    <label className="reminder">
      <span>
        Daily Check-in
        <small>Optimized for consistency</small>
      </span>

      <input
        type="time"
        value={value || "08:00"}
        onChange={(event) => saveAnswer("reminderTime", event.target.value)}
      />
    </label>
  );
}

export default Reminder;