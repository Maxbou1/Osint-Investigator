/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy-900': '#0B1F36',
        'navy-700': '#163A5E',
        'navy-50': '#F3F6FA'
      },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
}
