/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false, // keep your CSS safe
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
