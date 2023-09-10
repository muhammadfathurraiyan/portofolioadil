/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E5C30",
        secondary: "#363f22",
        font: "#202614",
        background: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
