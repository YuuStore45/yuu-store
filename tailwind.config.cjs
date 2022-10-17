// font 12, 14, 16, 18, 24 and 40 px

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      white100: "#f7f7f8",
      gray: "#E0E0E0",
      sky: "#94bdf5",
      red: "#EE4D5F",
      transparent: "transparent",
    },
    textColor: {
      transparent: "transparent",
      white: "#FFFFFF",
      normal: "#353233",
      weak: "#716e77",
      sky: "#94bdf5",
      red: "#EE4D5F",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        home: "linear-gradient(to right, #E0C4FD, #8FC6FD)",
      },
      boxShadow: {
        normal: "0 0 10px 1px #333",
        border: "0px 0px 5px 3px #94bdF5",
      },
      height: {
        68: "272px",
      },
      width: {
        68: "272px",
      },
      maxWidth: {
        container: "1222px",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
