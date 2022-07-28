/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulgrey': '#3d6773',
        'azuldark': '#1a353d',
        'orangenew': '#f98d73',
        'greynew': '#7da4a7',

      }
    },
  },
  plugins: [require("daisyui")],
}
