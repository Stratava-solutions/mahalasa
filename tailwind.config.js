/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006633",
        orange_bg:"#FFCC99"
      },
      fontFamily: {
        sans: ["Georgia", "Times New Roman", "Times", "serif"], 
      },
    },
  },
  plugins: [],
};
