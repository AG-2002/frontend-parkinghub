/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          from: { transform: "translateX(-30%)" },
          to: { transform: "translateX(30%)" },
        },
      },
      animation: {
        slideIn: "6s linear 4s infinite running slideIn",
      },
    },
  },
  plugins: [],
};
