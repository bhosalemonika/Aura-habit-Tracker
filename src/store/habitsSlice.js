import { createSlice } from "@reduxjs/toolkit";
import {
  loadHabits,
  saveHabits,
  toggleHabit,
  upsertHabit
} from "../data/habits";
import { readUser } from "../utils/userSession";

const habitsSlice = createSlice({
  name: "habits",
  initialState: loadHabits(readUser().email),
  reducers: {
    hydrateHabits(state, action) {
      return loadHabits(action.payload);
    },
    saveHabit(state, action) {
      return saveHabits(
        upsertHabit(state, action.payload.habit),
        action.payload.email
      );
    },
    completeHabit(state, action) {
      return saveHabits(toggleHabit(state, action.payload.id), action.payload.email);
    }
  }
});

export const { hydrateHabits, saveHabit, completeHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
