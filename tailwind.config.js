import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#fafafa",
            about: "#17c964",
            experience: "#f5a524",
            projects: "#f31260",
            education: "#006fee",
          },
        },
        dark: {
          colors: {
            background: "#18181b",
            about: "#45d483",
            experience: "#f7b750",
            projects: "#f54180",
            education: "#338ef7",
          },
        },
      },
    }),
  ],
};
