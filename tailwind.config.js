/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          400: '#E47F4D', // no4- light orange
          500: '#B2442C', // no5- terre rouge
          
        },
        secondary: {
          400: '#7F7948', // no2- Green
          600: '#6D9599', // no1- Light blue
        },
        accent1: {
          400: '#7F7948', // Teal
        },
        accent2: {
          400: '#6D9599', // no1- Light blue
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}

