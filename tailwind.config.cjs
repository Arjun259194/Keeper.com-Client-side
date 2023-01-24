/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#ffd983",
        sec: "#3c91e6",
        third: "#342e37",
        black: "#272727",
        smokewhite: "#F5F5F5",
      },
      fontFamily: {
        body: ["Sofia Sans"],
        title: ["Lobster"],
      },
    },
  },
  plugins: [],
}
