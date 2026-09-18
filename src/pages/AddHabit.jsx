import "../css/AddHabit.css";
import HabitForm from "../components/habits/HabitForm";
import { useHabitForm } from "../hooks/useHabitForm";

function AddHabit({ editHabit, goToMyHabits, onSaveHabit }) {
  const { form, updateForm, handleSubmit } = useHabitForm(
    editHabit,
    onSaveHabit,
    goToMyHabits
  );

  return (
    <div className="habit-page">
      <div className="page-header">
        <h1>{editHabit ? "Edit Habit" : "Add New Habit"}</h1>
        <p>Define the parameters of your next evolution. Clarity is the first step toward mastery.</p>
      </div>

      <HabitForm
        form={form}
        isEditing={Boolean(editHabit)}
        onChange={updateForm}
        onSubmit={handleSubmit}
        onCancel={goToMyHabits}
      />
    </div>
  );
}

export default AddHabit;
