/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#B48061"
      }
    },
    fontSize: {
      xs:'0.5rem',
      sm:'0.75rem',
      md:'1rem',
      lg:'1.25rem',
      xl:'2.5rem',
    },
  },
  plugins: [],
};
