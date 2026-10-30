
import { employees } from "./employees.js";

/* =====================================
   CONFIGURATION
===================================== */

const CONFIG = {
    debounceDelay: 120,
    maxResults: 50,
    maxHistory: 10
};

let history = [];

const imageCache = new Map();

const indexes = {
    id: new Map(),
    firstName: new Map(),
    lastName: new Map(),
    department: new Map(),
    fullName: new Map(),
    prefix: new Map()
};

/* =====================================
   NORMALIZATION
===================================== */

function normalize(value) {
    return String(value ?? "")
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");
}

/* =====================================
   BUILD SEARCH INDEXES
   Run only once
===================================== */

function buildIndexes() {

    employees.forEach(emp => {

        const id = normalize(emp["Employee ID"]);
        const first = normalize(emp["First Name"]);
        const last = normalize(emp["Last Name"]);
        const department = normalize(emp["Department"]);

        const fullName = `${first} ${last}`.trim();

        emp._search = {
            id,
            first,
            last,
            department,
            fullName
        };

        addIndex(indexes.id, id, emp);
        addIndex(indexes.firstName, first, emp);
        addIndex(indexes.lastName, last, emp);
        addIndex(indexes.department, department, emp);
        addIndex(indexes.fullName, fullName, emp);

        // Prefix indexes
        [first, last, fullName].forEach(name => {

            for (let i = 1; i <= name.length; i++) {

                const prefix = name.slice(0, i);

                addIndex(indexes.prefix, prefix, emp);

            }

        });

    });

}

/* =====================================
   INDEX HELPER
===================================== */

function addIndex(map, key, emp) {

    if (!key) return;

    if (!map.has(key)) {
        map.set(key, new Set());
    }

    map.get(key).add(emp);

}

/* =====================================
   FAST SEARCH
===================================== */

function searchEmployees(query) {

    query = normalize(query);

    if (!query) return [];

    // Exact Employee ID
    if (indexes.id.has(query)) {
        return [...indexes.id.get(query)];
    }

    // Exact full name
    if (indexes.fullName.has(query)) {
        return [...indexes.fullName.get(query)];
    }

    // Exact first name
    if (indexes.firstName.has(query)) {
        return [...indexes.firstName.get(query)];
    }

    // Exact surname
    if (indexes.lastName.has(query)) {
        return [...indexes.lastName.get(query)];
    }

    // Exact department
    if (indexes.department.has(query)) {
        return [...indexes.department.get(query)];
    }

    // Prefix search
    if (indexes.prefix.has(query)) {
        return [...indexes.prefix.get(query)];
    }

    // Multi-word and contains fallback
    const terms = query.split(" ");

    return employees.filter(emp => {

        const data = emp._search;

        const searchable = [
            data.id,
            data.first,
            data.last,
            data.department,
            data.fullName
        ].join(" ");

        return terms.every(term => searchable.includes(term));

    });

}

/* =====================================
   DEBOUNCED SEARCH
===================================== */

let searchTimer;

function setupSearch() {

    const input = document.getElementById("searchInput");
    const form = document.getElementById("scanForm");

    if (!input || !form) return;

    input.addEventListener("input", () => {

        clearTimeout(searchTimer);

        const query = input.value;

        if (!query.trim()) {
            clearResults();
            return;
        }

        searchTimer = setTimeout(() => {

            const results = searchEmployees(query);

            showEmployees(results.slice(0, CONFIG.maxResults));

        }, CONFIG.debounceDelay);

    });

    form.addEventListener("submit", e => {

        e.preventDefault();

        clearTimeout(searchTimer);

        const query = normalize(input.value);

        if (!query) return;

        const results = searchEmployees(query);

        if (!results.length) {
            showNotFound(query);
            return;
        }

        showEmployees(results.slice(0, CONFIG.maxResults));

    });

}

/* =====================================
   IMAGE LOADER
===================================== */

function loadEmployeeImage(img, empId) {

    const id = String(empId);

    if (imageCache.has(id)) {

        img.src = imageCache.get(id);
        return;

    }

    const png = `photos/${encodeURIComponent(id)}.png`;
    const jpg = `photos/${encodeURIComponent(id)}.jpg`;

    const test = new Image();

    test.onload = () => {
        setImage(img, id, png);
    };

    test.onerror = () => {

        const testJpg = new Image();

        testJpg.onload = () => {
            setImage(img, id, jpg);
        };

        testJpg.onerror = () => {
            setImage(img, id, "photos/placeholder.png");
        };

        testJpg.src = jpg;

    };

    test.src = png;

}

function setImage(img, id, path) {

    imageCache.set(id, path);

    if (img.isConnected) {
        img.src = path;
    }

}

/* =====================================
   DISPLAY EMPLOYEES
===================================== */

function showEmployees(list) {

    const details = document.getElementById("employeeDetails");

    if (!details) return;

    if (!list.length) {
        details.innerHTML =
            '<p class="text-danger mt-3">No employees found.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(emp => {

        const card = document.createElement("div");

        card.className = "card mb-3 shadow text-center";

        card.innerHTML = `
            <div class="card-body">

                <img class="img-fluid rounded mb-3 employee-img"
                     src="photos/placeholder.png"
                     style="width:180px;height:180px;object-fit:cover">

                <h5 class="employee-name"></h5>

                <p><b>ID:</b> ${escapeHTML(emp["Employee ID"])}</p>

                <p><b>Position:</b>
                    ${escapeHTML(emp["Position"] || "-")}
                </p>

                <p><b>Department:</b>
                    ${escapeHTML(emp["Department"] || "-")}
                </p>

                <p><b>Phone:</b>
                    ${escapeHTML(emp["Phone"] || "-")}
                </p>

            </div>
        `;

        card.querySelector(".employee-name").textContent =
            `${emp["First Name"]} ${emp["Last Name"]}`;

        const img = card.querySelector(".employee-img");

        loadEmployeeImage(img, emp["Employee ID"]);

        fragment.appendChild(card);

    });

    details.replaceChildren(fragment);

    // Update history once, not once per employee
    list.forEach(addToHistory);

    updateHistoryView();

}

/* =====================================
   HTML ESCAPING
===================================== */

function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}

/* =====================================
   NOT FOUND
===================================== */

function showNotFound(query) {

    const details = document.getElementById("employeeDetails");

    details.textContent = "";

    const message = document.createElement("div");

    message.className = "alert alert-danger mt-3";

    message.textContent =
        `No exact match found for "${query}"`;

    details.appendChild(message);

}

/* =====================================
   CLEAR RESULTS
===================================== */

function clearResults() {

    const details = document.getElementById("employeeDetails");

    details.replaceChildren();

}

/* =====================================
   HISTORY
===================================== */

function addToHistory(emp) {

    const id = String(emp["Employee ID"]);

    history = history.filter(
        e => String(e["Employee ID"]) !== id
    );

    history.unshift(emp);

    if (history.length > CONFIG.maxHistory) {
        history.pop();
    }

}

function updateHistoryView() {

    const list = document.getElementById("historyList");

    if (!list) return;

    const fragment = document.createDocumentFragment();

    history.forEach(emp => {

        const li = document.createElement("li");

        li.className = "list-group-item";

        li.textContent =
            `${emp["First Name"]} ${emp["Last Name"]} – ${emp["Employee ID"]}`;

        fragment.appendChild(li);

    });

    list.replaceChildren(fragment);

}

/* =====================================
   SESSION MANAGEMENT
===================================== */

function logout() {

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("sessionExpiry");

    window.location.href = "login.html";

}

function checkSession() {

    const user = localStorage.getItem("loggedInUser");
    const expiry = Number(localStorage.getItem("sessionExpiry"));

    if (!user || !expiry || Date.now() > expiry) {

        logout();
        return false;

    }

    return true;

}

/* =====================================
   INITIALIZATION
===================================== */

window.addEventListener("DOMContentLoaded", () => {

    if (!checkSession()) return;

    document.getElementById("logoutButton")
        ?.addEventListener("click", logout);

    if (!Array.isArray(employees)) {
        alert("employees.js not loaded correctly!");
        return;
    }

    buildIndexes();

    setupSearch();

    console.log(
        `Employee search ready: ${employees.length} records indexed.`
    );

});
