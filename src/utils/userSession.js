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