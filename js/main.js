import { employees } from "./employees.js";

let history = [];
const imageCache = new Map();

/* ================================
   IMAGE LOADER (FAST + CACHED)
================================ */
function loadEmployeeImage(imgEl, empId) {
  if (imageCache.has(empId)) {
    imgEl.src = imageCache.get(empId);
    return;
  }

  const png = `photos/${empId}.png`;
  const jpg = `photos/${empId}.jpg`;

  const test = new Image();
  test.onload = () => {
    imageCache.set(empId, png);
    imgEl.src = png;
  };
  test.onerror = () => {
    const testJpg = new Image();
    testJpg.onload = () => {
      imageCache.set(empId, jpg);
      imgEl.src = jpg;
    };
    testJpg.onerror = () => {
      imageCache.set(empId, "photos/placeholder.png");
    };
    testJpg.src = jpg;
  };
  test.src = png;
}

/* ================================
   SEARCH SETUP
================================ */
function setupSearch() {
  const input = document.getElementById("searchInput");
  const form = document.getElementById("scanForm");

  // 🔎 Live search (contains)
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      clearResults();
      return;
    }
    searchEmployees(query);
  });

  // 🔍 Button / Enter → EXACT search
  form.addEventListener("submit", e => {
    e.preventDefault();
    const query = input.value.toLowerCase().trim();
    if (!query) return;
    searchEmployeesExact(query);
  });
}

/* ================================
   SEARCH LOGIC
================================ */
function searchEmployees(query) {
  const filtered = employees.filter(emp =>
    (emp["First Name"] || "").toLowerCase().includes(query) ||
    (emp["Last Name"] || "").toLowerCase().includes(query) ||
    String(emp["Employee ID"]).includes(query) ||
    (emp["Department"] || "").toLowerCase().includes(query)
  );

  showEmployees(filtered);
}

function searchEmployeesExact(query) {
  const filtered = employees.filter(emp =>
    (emp["First Name"] || "").toLowerCase() === query ||
    (emp["Last Name"] || "").toLowerCase() === query ||
    String(emp["Employee ID"]) === query ||
    (emp["Department"] || "").toLowerCase() === query
  );

  if (filtered.length === 0) {
    showNotFound(query);
    return;
  }

  showEmployees(filtered);
}

/* ================================
   DISPLAY RESULTS
================================ */
function showEmployees(list) {
  const details = document.getElementById("employeeDetails");
  details.innerHTML = "";

  if (list.length === 0) {
    details.innerHTML = `<p class="text-danger mt-3">No employees found.</p>`;
    return;
  }

  list.forEach(emp => {
    const card = document.createElement("div");
    card.className = "card mb-3 shadow text-center";

    card.innerHTML = `
      <div class="card-body text-center">
        <img class="img-fluid rounded mb-3 employee-img"
             data-id="${emp["Employee ID"]}"
             src="photos/placeholder.png"
             style="width:180px;height:180px;object-fit:cover">

        <h5>${emp["First Name"]} ${emp["Last Name"]}</h5>
        <p><b>ID:</b> ${emp["Employee ID"]}</p>
        <p><b>Position:</b> ${emp["Position"] || "-"}</p>
        <p><b>Department:</b> ${emp["Department"]}</p>
        <p><b>Phone:</b> ${emp["Phone"] || "-"}</p>
      </div>
    `;

    details.appendChild(card);

    const img = card.querySelector(".employee-img");
    loadEmployeeImage(img, emp["Employee ID"]);

    addToHistory(emp);
  });
}

/* ================================
   NOT FOUND MESSAGE
================================ */
function showNotFound(query) {
  document.getElementById("employeeDetails").innerHTML = `
    <div class="alert alert-danger mt-3">
      ❌ No exact match found for <b>"${query}"</b>
    </div>
  `;
}

/* ================================
   CLEAR
================================ */
function clearResults() {
  document.getElementById("employeeDetails").innerHTML = "";
}

/* ================================
   HISTORY
================================ */
function addToHistory(emp) {
  history = history.filter(e => e["Employee ID"] !== emp["Employee ID"]);
  history.unshift(emp);
  if (history.length > 10) history.pop();
  updateHistoryView();
}

function updateHistoryView() {
  const list = document.getElementById("historyList");
  if (!list) return;

  list.innerHTML = history
    .map(e => `
      <li class="list-group-item">
        ${e["First Name"]} ${e["Last Name"]} – ${e["Employee ID"]}
      </li>
    `)
    .join("");
}

/* ================================
   INIT
================================ */
window.addEventListener("DOMContentLoaded", () => {
  if (typeof employees === "undefined") {
    alert("employees.js not loaded!");
    return;
  }
  setupSearch();
});
