/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#111111",
        // secondary: "#00f6ff",
        red: "#E21A37",
        darkRed: "#BB152D",
        black: "#111111",
        darkGrey: "#CACACA",
        grey: "#D9D9D9",
        white: "#ffffff",
      },
      fontFamily: {
        heynovember: ["HeyNovember", "serif"],
        bebasneue: ["BebasNeue-Regular", "sans-serif"],
        bevietnampro:["BeVietnamPro-Black", "sans-serif"],
        bignoodle:["big_noodle_titling", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xm: "844px",
      mm: "1060px",
      me: "1155px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};