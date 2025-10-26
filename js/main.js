let history = [];

// Utility: get query parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Lookup an employee by ID
function lookupEmployee(EmpId) {
  if (!EmpId) return;

  const inputNumber = parseFloat(EmpId);
  const employee = employees.find(e => e.EmployeeID === inputNumber);

  if (employee) {
    playSuccessSound();
    showEmployee(employee);
    addToHistory(employee);
  } else {
    alert("No record found for ID: " + EmpId);
  }
}

// Show a single employee
function showEmployee(employee) {
  const details = document.getElementById("employeeDetails");

  const photoPng = `photos/${employee.EmployeeID}.png`;
  const photoJpg = `photos/${employee.EmployeeID}.jpg`;
  const placeholder = 'photos/placeholder.png';

  details.innerHTML = `
    <div class="card mt-4 shadow text-center">
      <div class="card-body">
        <img src="${photoPng}" 
             alt="Photo" 
             class="img-fluid rounded mb-3" 
             width="150"
             onerror="this.onerror=null; this.src='${photoJpg}'; this.onerror=function(){this.src='${placeholder}';}">
        <h5>${employee.FirstName} ${employee.LastName}</h5>
        <p><b>ID:</b> ${employee.EmployeeID}</p>
        <p><b>Position:</b> ${employee.Position}</p>
        <p><b>Department:</b> ${employee.Department}</p>
        <p><b>Phone:</b> ${employee.Phone}</p>
      </div>
    </div>`;
}

// Show multiple employees (for live search)
function showEmployees(list) {
  const details = document.getElementById("employeeDetails");
  details.innerHTML = '';

  if (list.length === 0) {
    details.innerHTML = `<p class="text-danger mt-3">No employees found.</p>`;
    return;
  }

  list.forEach(emp => {
    const card = document.createElement("div");
    card.className = "card mt-2 shadow text-center";
    card.innerHTML = `
      <div class="card-body">
        <img src="photos/${emp.EmployeeID}.png" 
             onerror="this.onerror=null;this.src='photos/${emp.EmployeeID}.jpg';this.onerror=function(){this.src='photos/placeholder.png';}" 
             alt="Photo" class="img-fluid rounded mb-3">
        <h5>${emp.FirstName} ${emp.LastName}</h5>
        <p><b>ID:</b> ${emp.EmployeeID}</p>
        <p><b>Position:</b> ${emp.Position}</p>
        <p><b>Department:</b> ${emp.Department}</p>
        <p><b>Phone:</b> ${emp.Phone}</p>
      </div>`;
    details.appendChild(card);
  });
}

// Live search
function setupSearch() {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      document.getElementById("employeeDetails").innerHTML = '';
      return;
    }

const filtered = employees.filter(emp =>
    (emp.FirstName || '').toLowerCase().includes(query) ||
    (emp.LastName || '').toLowerCase().includes(query) ||
    emp.EmployeeID.toString() === query ||
    (emp.Department || '').toLowerCase().includes(query)
);


    showEmployees(filtered);
  });
}

// History
function addToHistory(employee) {
  history.unshift(employee);
  if (history.length > 10) history.pop();
  updateHistoryView();
}

function updateHistoryView() {
  const container = document.getElementById("historyList");
  if (!container) return;

  container.innerHTML = history
    .map(e => `<li class="list-group-item">${e.FirstName} ${e.LastName} - ${e.EmployeeID}</li>`)
    .join("");
}

// Success sound
function playSuccessSound() {
  const audio = new Audio("sounds/success.mp3");
  audio.play();
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
  setupSearch();

  // Barcode from URL
  const id = getQueryParam("id");
  if (id) lookupEmployee(id);

  // Search form submission
  const form = document.getElementById("scanForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const idInput = document.getElementById("barcodeInput");
      if (idInput && idInput.value) lookupEmployee(idInput.value.trim());
    });
  }
});
