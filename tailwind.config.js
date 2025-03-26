
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode (toggle class "dark")
  content: [
    "./index.html",
    "./Pages/**/*.{ts,tsx,js,jsx}",
    "./Components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  

    },
  },
  plugins: [

  ],
  corePlugins: {
    container: false, // Disables default container styles
  },
  variants: {
    extend: {
     
    },
  },
}
