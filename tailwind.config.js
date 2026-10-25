/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-next": {
          from: { opacity: 0, transform: "translateX(24px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-prev": {
          from: { opacity: 0, transform: "translateX(-24px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-24px)" },
        },
      },
      animation: {
        "slide-next": "slide-next .35s ease-out",
        "slide-prev": "slide-prev .35s ease-out",
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
