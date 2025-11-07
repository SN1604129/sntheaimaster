/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { navy: "#0b1220", indigo: "#5b6cff" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.12)" },
      borderRadius: { "2xl": "1.25rem" }
    }
  },
  plugins: []
};
