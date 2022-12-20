/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        semilg: "900px",
      },
      gridTemplateRows: {
        layout: "75px auto auto 600px 600px 100px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
