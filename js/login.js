/* ================================
   CONFIG
================================ */

// Session duration (minutes)
const SESSION_MINUTES = 10;

// ⚠️ DEMO credentials
// Later you can move this to backend / API
const USERS = [
  { username: "admin", password: "admin123" },
  { username: "hr", password: "hr123" }
];

/* ================================
   LOGIN HANDLER
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorBox = document.getElementById("loginError");

  // Already logged in?
  if (isSessionValid()) {
    window.location.href = "index.html";
    return;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      showError("Please enter username and password");
      return;
    }

    const user = USERS.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      showError("Invalid username or password");
      return;
    }

    startSession(user.username);
    window.location.href = "index.html";
  });

  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.classList.remove("d-none");
  }
});

/* ================================
   SESSION MANAGEMENT
================================ */
function startSession(username) {
  const expiryTime = Date.now() + SESSION_MINUTES * 60 * 1000;

  localStorage.setItem("loggedInUser", username);
  localStorage.setItem("sessionExpiry", expiryTime.toString());
}

function isSessionValid() {
  const user = localStorage.getItem("loggedInUser");
  const expiry = localStorage.getItem("sessionExpiry");

  if (!user || !expiry) return false;
  if (Date.now() > Number(expiry)) return false;

  return true;
}

/* ================================
   AUTO LOGOUT (OPTIONAL TIMER)
================================ */
setInterval(() => {
  const expiry = localStorage.getItem("sessionExpiry");
  if (expiry && Date.now() > Number(expiry)) {
    logout();
  }
}, 10 * 1000); // check every 10 seconds

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("sessionExpiry");
  window.location.href = "login.html";
}
