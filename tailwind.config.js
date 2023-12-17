/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': "rgba(5, 4, 1, 1)",
      'white': "rgba(255, 250, 255, 1)",
      'tomato': "rgba(252, 81, 48, 1)",
      'tr-tomato': "rgba(252, 81, 48, 0.5)",
      'cyan': "rgba(56, 174, 204, 1)",
      'jet': "rgba(32, 32, 34, 1)",
      'cream': "rgba(255, 253, 223, 1)",
      'red': "rgba(179, 0, 0, 1)",
    }
  },
  darkMode: "class",
  plugins: [],
}