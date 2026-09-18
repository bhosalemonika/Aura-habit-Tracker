function AddHabitTile({ onClick }) {
  return (
    <button
      className="add-card"
      type="button"
      onClick={onClick}
    >
      <div className="add-circle">+</div>
      <h2>Add Habit</h2>
      <p>Build your aura</p>
    </button>
  );
}

export default AddHabitTile;
