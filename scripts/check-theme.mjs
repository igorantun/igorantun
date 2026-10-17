import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

const source = await readFile("src/scripts/theme.ts", "utf8");
const code = ts.transpile(source, { target: ts.ScriptTarget.ES2022 });
const layout = await readFile("src/layouts/Layout.astro", "utf8");
const bootstrap = layout.match(/<script is:inline>([\s\S]*?)<\/script>/)[1];

function setup({ saved = null, dark = false, blocked = false } = {}) {
  const root = { dataset: {} };
  const themeColors = [{ content: "#faf9f6" }, { content: "#1a1a19" }];
  const listeners = {};
  const system = {
    matches: dark,
    addEventListener: (event, handler) => (listeners.system = handler),
  };
  const button = {
    dataset: {},
    disabled: true,
    setAttribute(name, value) {
      this[name] = value;
    },
    addEventListener: (event, handler) => (listeners.click = handler),
  };
  const storage = {
    value: saved,
    getItem() {
      if (blocked) throw Error("Storage blocked");
      return this.value;
    },
    setItem(key, value) {
      if (blocked) throw Error("Storage blocked");
      this.value = value;
    },
  };
  const context = vm.createContext({
    document: {
      documentElement: root,
      querySelector: () => button,
      querySelectorAll: () => themeColors,
    },
    getComputedStyle: () => ({
      getPropertyValue: () =>
        root.dataset.theme === "dark" ? "#1a1a19" : "#faf9f6",
    }),
    window: {
      matchMedia: () => system,
      addEventListener: (event, handler) => (listeners.storage = handler),
    },
    localStorage: storage,
  });
  vm.runInContext(bootstrap, context);
  vm.runInContext(code, context);
  return { root, button, system, storage, listeners, themeColors };
}

// System preference remains live until a visitor explicitly chooses a theme.
const automatic = setup({ dark: true });
assert.equal(automatic.root.dataset.theme, "dark");
assert.equal(automatic.button["aria-label"], "Switch to light theme");
assert.equal(automatic.button.disabled, false);
assert(automatic.themeColors.every((meta) => meta.content === "#1a1a19"));
automatic.system.matches = false;
automatic.listeners.system();
assert.equal(automatic.root.dataset.theme, "light");
assert(automatic.themeColors.every((meta) => meta.content === "#faf9f6"));
automatic.listeners.click();
assert.equal(automatic.storage.value, "dark");
assert(automatic.themeColors.every((meta) => meta.content === "#1a1a19"));
automatic.listeners.system();
assert.equal(automatic.root.dataset.theme, "dark");

// Saved preferences survive a reload, independently of the system setting.
const saved = setup({ saved: "light", dark: true });
assert.equal(saved.root.dataset.theme, "light");
saved.listeners.storage({ key: "theme", newValue: "dark" });
assert.equal(saved.root.dataset.theme, "dark");
saved.listeners.storage({ key: null, newValue: null });
saved.system.matches = false;
saved.listeners.system();
assert.equal(saved.root.dataset.theme, "light");

for (const value of ["system", "invalid", null]) {
  assert.equal(setup({ saved: value, dark: true }).root.dataset.theme, "dark");
}
const blocked = setup({ blocked: true });
blocked.listeners.click();
assert.equal(blocked.root.dataset.theme, "dark");
assert.equal(blocked.button["aria-label"], "Switch to light theme");
console.log(
  "Theme behavior verified: system, saved, cross-tab, and blocked storage.",
);
