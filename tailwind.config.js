/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32029",
          hover: "#B71C1C",
        },
      },
      fontSize: {
        base: ["14px", "1.5"],
        sm: ["14px", "1.5"],
      },
    },
  },
  plugins: [],
}