import { normalizeEmail } from "../utils/userSession";

const HABITS_KEY = "auraHabits";
export const defaultHabits = [
  {
    id: "coding",
    name: "Daily Coding",
    description: "Build something small or practice a concept.",
    category: "Productivity",
    frequency: "Daily",
    reminderTime: "10:00",
    startDate: "",
    icon: "review",
    streak: 8,
    completed: false
  }
];

function getHabitsKey(email) {
  return `${HABITS_KEY}:${normalizeEmail(email)}`;
}

export function loadHabits(email = "") {
  try {
    const saved = JSON.parse(localStorage.getItem(getHabitsKey(email)));
    if (Array.isArray(saved)) {
      return saved;
    }

    // Migrate the original single-user data only for the account that owned it.
    const legacyUser = JSON.parse(localStorage.getItem("auraUser"));
    const legacyHabits = JSON.parse(localStorage.getItem(HABITS_KEY));
    if (normalizeEmail(legacyUser?.email) === normalizeEmail(email) && Array.isArray(legacyHabits)) {
      localStorage.setItem(getHabitsKey(email), JSON.stringify(legacyHabits));
      return legacyHabits;
    }
  } catch {
    localStorage.removeItem(getHabitsKey(email));
  }

  return defaultHabits.map((habit) => ({ ...habit }));
}

export function saveHabits(habits, email = "") {
  localStorage.setItem(getHabitsKey(email), JSON.stringify(habits));
  return habits;
}

export function buildHabit(form, editHabit) {
  return {
    id: editHabit?.id || Date.now(),
    name: form.name.trim(),
    description: form.description.trim(),
    category: form.category,
    frequency: form.frequency,
    reminderTime: form.reminderTime,
    startDate: form.startDate,
    icon: form.icon,
    streak: editHabit?.streak || 0,
    completed: editHabit?.completed || false
  };
}
export function upsertHabit(habits, habit) {
  const exists = habits.some((item) => item.id === habit.id);
  if (!exists) {
    return [...habits, habit];
  }

  return habits.map((item) =>
    item.id === habit.id ? habit : item
  );
}

export function toggleHabit(habits, id) {
  return habits.map((habit) => {
    if (habit.id !== id) {
      return habit;
    }

    const completed = !habit.completed;
    return {
      ...habit,
      completed,
      streak: Math.max(
        0,
        (habit.streak || 0) + (completed ? 1 : -1)
      )
    };
  });
}