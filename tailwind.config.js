/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sf: ['SF Pro Display Regular', 'sans-serif'],
        'sf-thin': ['SF Pro Display Thin', 'sans-serif'],
        'sf-medium': ['SF Pro Display Medium', 'sans-serif'],
        'sf-bold': ['SF Pro Display Bold', 'sans-serif'],

        rubik: ['Rubik Regular', 'sans-serif'],
        'rubik-thin': ['Rubik Thin', 'sans-serif'],
        'rubik-medium': ['Rubik Medium', 'sans-serif'],
        'rubik-bold': ['Rubik Bold', 'sans-serif'],

        poppins: ['Poppins Regular', 'sans-serif'],
        'poppins-thin': ['Poppins Thin', 'sans-serif'],
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
