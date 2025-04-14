/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#32D095",
        backgroundColor: "#EDF2F6",
      },
    },
  },
  plugins: [],
};
