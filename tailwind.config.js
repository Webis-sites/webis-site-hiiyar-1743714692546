/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A5A5',
        secondary: '#9B786F',
        'primary-dark': "#C89292",
        'light-beige': "#FAF6F2",
        'primary-light': "#D4A5A5",
        'secondary-light': "#9B786F",
        'secondary-dark': "#7D5F58"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'body': ['Assistant', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      },
      width: {
        'full-vw': '100vw',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}