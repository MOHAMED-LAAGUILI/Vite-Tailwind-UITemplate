import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import lineClamp from '@tailwindcss/line-clamp';
import scrollbar from 'tailwind-scrollbar';
import animate from 'tailwindcss-animate';

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
        /*
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA",
        accent: "#F97316",
        // Additional colors
        'brand-blue': '#005F73',
        */
       'brand-yellow': '#F1C40F',
      },
      /*spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },*/
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Roboto', 'sans-serif'], // Additional font family
        body: ['Lora', 'serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      /*
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'bounce': 'bounce 1s infinite', // Example of additional animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      */
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
    lineClamp,
    scrollbar,
    animate,
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
