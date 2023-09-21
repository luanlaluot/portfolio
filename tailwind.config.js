/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
     extend: {
      colors: {
        day: {
          DEFAULT:'#F6F8FA'
        },
        night: {
          DEFAULT:'#212936'
        }
      },
    }
  },
  plugins: [],
};
