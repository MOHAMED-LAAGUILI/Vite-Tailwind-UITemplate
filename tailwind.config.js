
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode (toggle class "dark")
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
       'brand-yellow': '#F1C40F',
      },
    
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Roboto', 'sans-serif'], // Additional font family
        body: ['Lora', 'serif'],
      },
      screens: {
        '3xl': '1920px',
      },
    
    },
  },
  plugins: [

  ],
  corePlugins: {
    container: false, // Disables default container styles
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active'],
    },
  },
}
