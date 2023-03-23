/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        finger: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(20px)" },
        },
      },
      animation: {
        finger: 'finger 1s infinite  0s',
      }
    },
  },
  plugins: [],
};
