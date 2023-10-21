/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#0070F3",
        red: "#E5383B",
        yellow: "#FFD500",  // Add the custom color as a secondary option
        grey: "#A0AEC0",
        "dark-grey": "#6B7280",
        "opaque-black": "rgba(0,0,0,0.35)",
        "brown": "#854d0e",
        "beige": "#fed7aa",
        "beige1": "rgb(248, 240, 229)",
        "beige2":"rgb(234, 219, 200)",
        "slate": "#d4d4d8",
         "navy-blue": "#082f49",
         "cyan": "#67e8f9",
         "violet": "#7e22ce",
         "emerald": "#10b981",
         "pink": "#f472b6",
         "rose": "#fb7185",
        

      },
      
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }), 
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./src/assets/brush.png)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  corePlugins: {
    // ...
  },
  // Add the keyframes directive for the spin-slow animation here
  // This should be at the top-level of your configuration file
  // outside of the theme, extend, colors, and screens sections.
  "@layer": {
    keyframes: {
      "spin-slow": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
};