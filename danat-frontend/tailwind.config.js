/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4D6D", // Red
          dark: "#D62839", // Dark Red
        },
        secondary: {
          DEFAULT: "#FF7A9E", // Pink
          dark: "#FF1F49", // Dark Pink
        },
        background: "#FFFFFF", // White
        text: "#111827", // Dark Gray
        accent: "#F59E0B", // Amber
        light: "#F9FAFB", // Light Gray for subtle backgrounds
      },
    },
  },
  plugins: [],
};
