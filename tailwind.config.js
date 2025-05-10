/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4411E8A", // fondo
        secondary: "#050044", // botones
        accent: "#FAECD4", // marca
        neutral: "#ffffff", // texto claro
        muted: "#c0c2da", // gris suave
      },
    },
  },
  plugins: [],
};
