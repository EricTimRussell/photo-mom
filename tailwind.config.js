/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Add Custom Colors below:
      },
      fontFamily: {
        // Add default font below:
      }
    },
  },
  plugins: [],
}