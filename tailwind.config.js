
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode (toggle class "dark")
  content: [
    "./index.html",
    "./Pages/**/*.{ts,tsx,js,jsx,wasm,css,html}",
    "./Components/**/*.{ts,tsx,js,jsx,wasm,css,html}",
    "./src/**/*.{ts,tsx,js,jsx,wasm,css,html}",
    "*.{js,ts,jsx,tsx,wasm,css,html}",
  ],
  theme: {
    extend: {
      colors: {
     
      },
    },
  },
  plugins: [
    
   ],
  corePlugins: {
  
  },
  variants: {
    extend: {
     
    },
  },
  safelist: [

  ],
};