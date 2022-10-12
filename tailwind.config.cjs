/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      white100: "#f7f7f8",
      gray: "#888888",
      sky: "#94bdf5",
    },
    textColor: {
      transparent: "transparent",
      white: "#FFFFFF",
      normal: "#000000",
      weak: "#888888",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        home: "linear-gradient(to right, #E0C4FD, #8FC6FD)",
      },
      boxShadow: {
        normal: "0 0 0 1px #333",
      },
      height: {
        68: "272px",
      },
    },
  },
  plugins: [],
};
