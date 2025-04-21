/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <-- this line is key for Vite projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
