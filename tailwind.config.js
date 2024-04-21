/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": {},
          "100%": { opacity: "1" },
        },
        slideup: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        spinonce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadein: "fadein 0.2s ease-in-out 1 forwards",
        slideup: "slideup 0.2s ease-in-out 1 forwards",
        spinonce: "spinonce 1s linear forwards 500ms",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
