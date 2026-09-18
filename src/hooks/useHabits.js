import { useDispatch, useSelector } from "react-redux";
import {
  completeHabit as completeHabitAction,
  saveHabit as saveHabitAction
} from "../store/habitsSlice";

export function useHabits() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);
  const completeHabit = (id) => {
    dispatch(completeHabitAction(id));
  };
  const saveHabit = (habit) => {
    dispatch(saveHabitAction(habit));
  };
  return {
    habits,
    completeHabit,
    saveHabit,
    completedCount: habits.filter((habit) => habit.completed).length,
    longestStreak: habits.reduce(
      (best, habit) => Math.max(best, habit.streak || 0),
      0
    )
  };
}