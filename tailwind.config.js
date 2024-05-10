/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary */

        cyan: "hsl(180, 66%, 49%)",
        cyanWhite: "hsl(180, 41%, 65%)",
        darkViolet: "hsl(257, 27%, 26%)",

        /* Secondary */

        redSecond: "hsl(0, 87%, 67%)",

        /* Neutral */

        gray: "hsl(0, 0%, 90%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontSize: {
        bodySize: "18px",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"], 
      }
    },
  },
  plugins: [],
}

