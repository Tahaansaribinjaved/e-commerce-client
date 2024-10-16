/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // You can add Tailwind CSS animations here if needed
  ],
};
