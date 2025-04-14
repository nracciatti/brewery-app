/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0A0A1B",
        purple: "#6A3DE8",
        pink: "#E93A82",
        warning: "#F59E0B",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #6A3DE8, #E93A82)",
      },
    },
  },
  plugins: [],
};
