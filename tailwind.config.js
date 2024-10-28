/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your component files
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('preline/plugin'),
    // You can add Tailwind CSS animations here if needed
  ],
};
