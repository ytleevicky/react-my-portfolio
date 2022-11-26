/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Great Vibes'],
      
    },
    colors: {
      'navy': '#0A192F',
      'cyan': '#64FFDA',
      'sky': '#CCD6F6',
      'sky-dark': '#8892B0',
      'transparent': '00FFFFFF'
    }
  },
  plugins: [],
}
