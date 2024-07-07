/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      backgroundColor: {
        'primary': '#55198b',
        'primary-dark': '#181733',
        'primary-light': '#ffffff',
        'sectionbg-light': '#f3f5f8', 
      },
      colors: {
        'secondary-dark': '#00159b',
        'third-dark': '#921919',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}