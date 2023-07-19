/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-red": "#FC4747",
        "semi-dark": "#10141E",
        "semi-light": "#FFFFFF",
        "semi-gray": "#5A698F",
        "light-dark": "#161D2F",
      },
    },
  },
  plugins: [],
};
