/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': "var(--navy)",
        'dark-navy': "var(--dark-navy)",
        'cyan': "var(--cyan)",
        'lightest-slate': "var(--lightest-slate)",
        'slate': "var(--slate)",
      }
    },
    fontFamily: {
      signature: ['Great Vibes'],
      
    },
    
  },
  plugins: [],
}
