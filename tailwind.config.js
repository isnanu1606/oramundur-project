/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B1F3B",
        orange: "#FF7B00",
        green: "#00C896",
        graytext: "#5F6572",
        soft: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
