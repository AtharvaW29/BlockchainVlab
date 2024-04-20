/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '900': '#1E3A8A',
        },
        green: {
          '500': '#32CD32',
        },
        yellow: {
          '500': '#DAA520',
        },
        purple: {
          '800': '#6A0DAD',
        },
        white: '#F8F8FF',
      },
    },
  },
  plugins: [],
}