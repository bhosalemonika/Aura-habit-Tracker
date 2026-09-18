import { useDispatch, useSelector } from "react-redux";
import {
  completeHabit as completeHabitAction,
  saveHabit as saveHabitAction
} from "../store/habitsSlice";
import { readUser } from "../utils/userSession";

export function useHabits() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);
  const email = readUser().email;
  const completeHabit = (id) => {
    dispatch(completeHabitAction({ id, email }));
  };
  const saveHabit = (habit) => {
    dispatch(saveHabitAction({ habit, email }));
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