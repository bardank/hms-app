/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FC39E",
        secondary: "#323232",
        dark: "rgba(43, 42, 42, 0.6)",
      },
    },
  },
  // plugins: [require("daisyui")],
};
