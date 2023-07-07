/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: { DEFAULT: "4px" },
    colors: {
      black: { 500: "#000" },
      green: { 500: "#04171A" },
      pink: { 500: "#FF45A4" },
      white: { 500: "#fff" },
    },
    extend: {
      maxWidth: {
        readable: "65ch",
      },
    },
  },
  plugins: [],
};
