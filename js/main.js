
import { employees } from "./employees.js";
let history = [];

/* ================================
   LIVE SEARCH + BUTTON SEARCH
================================ */
function setupSearch() {
  const input = document.getElementById("searchInput");
  const form = document.getElementById("scanForm");

  // 🔎 Live search while typing
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      clearResults();
      return;
    }
    searchEmployees(query);
  });

  // 🔍 Search button or Enter key
  form.addEventListener("submit", e => {
    e.preventDefault();
    const query =input.value.toLowerCase().trim();
    if (!query) return;
    searchEmployeesExact(query);
  });
}

/* ================================
   SEARCH LOGIC (YOUR LOGIC)
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
  const filteris = employees.filter(emp =>
    (emp["First Name"] || "").toLowerCase() === query ||
    (emp["Last Name"] || "").toLowerCase() === query ||
    String(emp["Employee ID"]) === query ||
    (emp["Department"] || "").toLowerCase() === query
  );

  if (filteris.length === 0) {
    showNotFound(query);
    return;
  }

  showEmployees(filteris);
}

function showNotFound(query) {
  document.getElementById("employeeDetails").innerHTML = `
    <div class="alert alert-danger mt-3">
      ❌ No exact match found for <b>"${query}"</b>
    </div>
  `;
}

/* ================================
   DISPLAY MULTIPLE EMPLOYEES
================================ */
function showEmployees(list) {
  const details = document.getElementById("employeeDetails");
  details.innerHTML = "";

  if (list.length === 0) {
    details.innerHTML = `<p class="text-danger mt-3">No employees found.</p>`;
    return;
  }

  list.forEach(emp => {
      const imgUrls = getEmployeeImage(emp["Employee ID"]);
    const card = document.createElement("div");
    card.className = "card mt-3 shadow text-center";

  // Use CSS fallback with multiple URLs: first try PNG, then JPG, then placeholder

  card.className = "card mb-3";
   card.innerHTML = `
    <div class="card-body text-center">
      <img class="img-fluid rounded mb-3" 
           style="width:180px;height:180px;object-fit:cover"
           src="${imgUrls.placeholder}" 
           onload="const img = this; 
                   fetch('${imgUrls.png}', { method:'HEAD' })
                     .then(r => { if(r.ok) img.src='${imgUrls.png}'; else throw 0; })
                     .catch(() => fetch('${imgUrls.jpg}', { method:'HEAD' })
                       .then(r => { if(r.ok) img.src='${imgUrls.jpg}'; })
                     );">
      <h5>${emp["First Name"]} ${emp["Last Name"]}</h5>
      <p><b>ID:</b> ${emp["Employee ID"]}</p>
      <p><b>Position:</b> ${emp["Position"] || "-"}</p>
      <p><b>Department:</b> ${emp["Department"]}</p>
      <p><b>Phone:</b> ${emp["Phone"] || "-"}</p>
    </div>
  `;


    details.appendChild(card);
    addToHistory(emp);
  });
}

function getEmployeeImage(empId) {
  // Always start with placeholder
  const placeholder = 'photos/placeholder.png';

  // Check both PNG and JPG (we will try to load, but fallback immediately)
  const png = `photos/${empId}.png`;
  const jpg = `photos/${empId}.jpg`;

  // Return an object with all possible sources
  return { png, jpg, placeholder };
}

/* ================================
   CLEAR RESULTS
================================ */
function clearResults() {
  document.getElementById("employeeDetails").innerHTML = "";
}

/* ================================
   HISTORY
================================ */
function addToHistory(employee) {
  history = history.filter(e => e["Employee ID"] !== employee["Employee ID"]);
  history.unshift(employee);
  if (history.length > 10) history.pop();
  updateHistoryView();
}

function updateHistoryView() {
  const container = document.getElementById("historyList");
  if (!container) return;

  container.innerHTML = history
    .map(e => `
      <li class="list-group-item">
        ${e["First Name"]} ${e["Last Name"]} – ${e["Employee ID"]}
      </li>
    `)
    .join("");
}

/* ================================
   SOUND
================================ */
function playSuccessSound() {
  const audio = document.getElementById("successSound");
  if (audio) audio.play();
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
