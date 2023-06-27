/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B48061",
        "dark-primary": "#A06F52",
      },
    },
    fontSize: {
      sm: ".75rem",
      md: ".9rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.35rem",
      "5xl": "3rem",
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-footer": {
          "background-image": "url(/common/bg-footer.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
