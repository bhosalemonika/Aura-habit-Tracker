import { useState } from "react";
import "../css/MyHabits.css";

import HabitsHeader from "../components/habits/HabitsHeader";
import HabitGrid from "../components/habits/HabitGrid";
import { useHabits } from "../hooks/useHabits";

function MyHabits({
  habits: providedHabits,
  completeHabit,
  openAddHabit,
  openEditHabit
}) {
  const reduxHabits = useHabits();
  const [category, setCategory] = useState("All");
  const habits = providedHabits ?? reduxHabits.habits;

  const handleCompleteHabit = (id) => {
    (completeHabit ?? reduxHabits.completeHabit)(id);
  };

  const filteredHabits = category === "All"
    ? habits
    : habits.filter((habit) => habit.category === category);

  return (
    <div className="my-habits-page">
      <HabitsHeader
        category={category}
        onCategoryChange={setCategory}
      />
      <HabitGrid
        habits={filteredHabits}
        onAddHabit={openAddHabit}
        onCompleteHabit={handleCompleteHabit}
        onEditHabit={openEditHabit}
      />
    </div>
  );
}

export default MyHabits;
