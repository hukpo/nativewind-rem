const nativewind = require("nativewind/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        remTest: "10rem",
      },
    },
  },
  presets: [nativewind],
};
