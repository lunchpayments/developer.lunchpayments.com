/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#26BF9E",
        "brand-100": "#EAFBF7",
        background: "#F8FBFA",
        text: "#3e5953",
        blue: "#1DBAC9",
      },
    },
  },
  plugins: [],
};
