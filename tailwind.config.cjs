/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-soft-blue": "hsl(215, 51%, 70%)",
        "primary-cyan": "hsl(178, 100%, 50%)",
        "main-bg": "hsl(217, 54%, 11%)",
        "card-bg": "hsl(216, 50%, 16%)",
        "line-color": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
