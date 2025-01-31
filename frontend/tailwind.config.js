// /** @type {import('tailwindcss').Config} */

// export default {
//     content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
//     theme: {
//       extend: {},
//     },
//     darkMode: "class",
//     plugins: [
//       require('daisyui'),
//     ],

// };


// tailwind.config.js
const daisyui = require('daisyui');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    daisyui,
  ],
};

