import { useState } from "react";
import { useDispatch } from "react-redux";
import { buildHabit } from "../data/habits";
import { saveHabit as saveHabitAction } from "../store/habitsSlice";

function getDefaultForm(editHabit) {
  return {
    name: editHabit?.name || "",
    description: editHabit?.description || "",
    category: editHabit?.category || "Health",
    frequency: editHabit?.frequency || "Daily",
    reminderTime: editHabit?.reminderTime || "08:00",
    startDate: editHabit?.startDate || "",
    icon: editHabit?.icon || "meditation"
  };
}

export function useHabitForm(editHabit, onSaveHabit, goToMyHabits) {
  const dispatch = useDispatch();
  const [form, setForm] = useState(() => getDefaultForm(editHabit));

  const updateForm = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("Please enter habit name");
      return;
    }

    const habit = buildHabit(form, editHabit);

    if (onSaveHabit) {
      onSaveHabit(habit);
      return;
    }

    dispatch(saveHabitAction(habit));
    goToMyHabits?.();
  };

  return { form, updateForm, handleSubmit };
}