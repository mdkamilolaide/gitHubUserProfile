/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        san: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
