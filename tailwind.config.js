/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#B48061",
        "dark-primary": "#A06F52",
      },
      backgroundImage:{
        'footer': "url('/common/bg-footer.png')",
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
  plugins: [
    require("daisyui"),
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-footer": {
          "background-image": "url(/common/bg-footer.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        }
      };

      addUtilities(utilities);
    })

  ],
};
