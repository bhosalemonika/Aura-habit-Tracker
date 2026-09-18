const USERS_KEY = "auraUsers";

export function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function readUsers() {
  try {
    const savedUsers = JSON.parse(localStorage.getItem(USERS_KEY));
    if (Array.isArray(savedUsers)) {
      return savedUsers;
    }

    const legacyUser = JSON.parse(localStorage.getItem("auraUser"));
    return legacyUser?.email ? [legacyUser] : [];
  } catch {
    return [];
  }
}

export function registerUser(user) {
  const users = readUsers();
  const email = normalizeEmail(user.email);

  if (users.some((savedUser) => normalizeEmail(savedUser.email) === email)) {
    return { ok: false, error: "An account with this email already exists." };
  }

  const newUser = { ...user, email };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
  return { ok: true, user: newUser };
}

export function findUser(email, password) {
  return readUsers().find(
    (user) => normalizeEmail(user.email) === normalizeEmail(email) && user.password === password
  );
}

export function setUserSession(user) {
  localStorage.setItem("auraUser", JSON.stringify(user));
  localStorage.setItem("auraEmail", user.email);
  localStorage.setItem("auraName", user.name);
}

export function readUser() {
  try {
    return JSON.parse(localStorage.getItem("auraUser")) || {};
  } catch {
    return {};
  }
}

export function clearUserSession() {
  localStorage.removeItem("auraUser");
  localStorage.removeItem("auraEmail");
  localStorage.removeItem("auraName");
}