/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        home: "linear-gradient(to right, #E0C4FD, #8FC6FD)",
      },
    },
  },
  plugins: [],
};
