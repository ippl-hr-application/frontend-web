/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#2051E5",
        secondary: "#0065FF",
      },
      backgroundColor: {
        layer: "#84AEFF",
      },
    },
  },
  plugins: [],
}

