/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB800", // Galben Flash Cafe
        secondary: "#1E1E1E", // Fundal închis
        accent: "#FFD700", // Auriu
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
