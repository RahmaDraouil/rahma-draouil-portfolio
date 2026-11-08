/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1593D0',
        'primary-dark': '#17324D',
        accent: '#1B8A88',
        'text-main': '#202124',
        'text-secondary': '#666A70',
        'bg-light': '#F7FAFC',
      },
    },
  },
  plugins: [],
}
