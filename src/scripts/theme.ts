type Theme = "light" | "dark";
const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>(".theme-toggle");
const system = window.matchMedia("(prefers-color-scheme: dark)");

// The head script has already restored a saved preference, if there is one.
let preference: Theme | null =
  root.dataset.theme === "light" || root.dataset.theme === "dark"
    ? root.dataset.theme
    : null;

function applyTheme() {
  const theme = preference ?? (system.matches ? "dark" : "light");
  root.dataset.theme = theme;
  const surface = getComputedStyle(root).getPropertyValue("--surface").trim();
  for (const meta of document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  )) {
    meta.content = surface;
  }
  if (button) {
    const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;
    button.dataset.mode = theme;
    button.setAttribute("aria-label", label);
    button.title = label;
    button.disabled = false;
  }
}

button?.addEventListener("click", () => {
  preference = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme();
  try {
    localStorage.setItem("theme", preference);
  } catch {
    // The toggle still works for this visit when storage is blocked.
  }
});

system.addEventListener("change", applyTheme);
window.addEventListener("storage", (event) => {
  if (event.key !== "theme" && event.key !== null) return;
  preference =
    event.newValue === "light" || event.newValue === "dark"
      ? event.newValue
      : null;
  applyTheme();
});

applyTheme();
