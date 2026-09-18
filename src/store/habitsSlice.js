import { createSlice } from "@reduxjs/toolkit";
import {
  loadHabits,
  saveHabits,
  toggleHabit,
  upsertHabit
} from "../data/habits";

const habitsSlice = createSlice({
  name: "habits",
  initialState: loadHabits(),
  reducers: {
    saveHabit(state, action) {
      return saveHabits(upsertHabit(state, action.payload));
    },
    completeHabit(state, action) {
      return saveHabits(toggleHabit(state, action.payload));
    }
  }
});

export const { saveHabit, completeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
