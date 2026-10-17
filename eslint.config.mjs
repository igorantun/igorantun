import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist/**", ".astro/**"]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    // Safari needs explicit list roles when list-style is none.
    rules: { "astro/jsx-a11y/no-redundant-roles": "off" },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
]);
