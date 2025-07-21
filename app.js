// Données de réglages photo (exemple simplifié, complète selon ton tableau)
const settings = [
  { type: "Paysage", mode: "A", expo: "Auto", f: "f/8", speed: "1/125", iso: 100, wb: "Daylight", af: "AF-S", focal: "24-70mm", nd: "ND4", notes: "" },
  { type: "Portrait", mode: "A", expo: "Auto", f: "f/2.8", speed: "1/200", iso: 200, wb: "Auto", af: "AF-C", focal: "85mm", nd: "None", notes: "" },
  { type: "Feux d'artifice", mode: "M", expo: "Longue", f: "f/11", speed: "10s", iso: 100, wb: "Incandescent", af: "MF", focal: "24mm", nd: "None", notes: "" },
  // Ajoute les autres réglages ici...
];

// --- Affichage du tableau ---
const tbody = document.querySelector("#settingsTable tbody");
const filterType = document.getElementById("filterType");

// Remplir la liste des types dans le filtre
const types = [...new Set(settings.map(s => s.type))];
types.forEach(t => {
  const opt = document.createElement("option");
  opt.value = t;
  opt.textContent = t;
  filterType.appendChild(opt);
});

function renderTable(filter = "all") {
  tbody.innerHTML = "";
  const filtered = filter === "all" ? settings : settings.filter(s => s.type === filter);
  filtered.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.type}</td><td>${row.mode}</td><td>${row.expo}</td><td>${row.f}</td><td>${row.speed}</td>
      <td>${row.iso}</td><td>${row.wb}</td><td>${row.af}</td><td>${row.focal}</td><td>${row.nd}</td><td>${row.notes}</td>
    `;
    tbody.appendChild(tr);
  });
}

filterType.addEventListener("change", () => {
  renderTable(filterType.value);
});

renderTable();

// --- Mode sombre ---
const themeToggle = document.getElementById("themeToggle");
const darkThemeKey = "darkThemeEnabled";

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem(darkThemeKey, isDark);
}

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
});

const savedTheme = localStorage.getItem(darkThemeKey) === "true";
applyTheme(savedTheme);

// --- PWA Installation ---
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener("click", () => {
  installBtn.hidden = true;
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      deferredPrompt = null;
    });
  }
});

// --- Alertes Golden Hour ---
const alertsDiv = document.getElementById("alerts");
const alertToggle = document.getElementById("toggleAlerts");
let alertsEnabled = localStorage.getItem("alertsEnabled") === "true";

function updateAlertToggle() {
  alertToggle.textContent = alertsEnabled ? "🔔 Alertes : ON" : "🔕 Alertes : OFF";
}
updateAlertToggle();

alertToggle.addEventListener("click", () => {
  alertsEnabled = !alertsEnabled;
  localStorage.setItem("alertsEnabled", alertsEnabled);
  updateAlertToggle();
  if (alertsEnabled) {
    getGoldenHour();
  } else {
    alertsDiv.innerHTML = "";
  }
});

function notify(title, body) {
  if (Notification.permission === "granted") {
    new Notification(title, { body
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker enregistré'))
    .catch(err => console.warn('Erreur SW', err));
}

