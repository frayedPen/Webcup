/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          400: '#F7B85D', // Light yellow
        },
        secondary: {
          400: '#E47F4D', // Orange
          600: '#B2442C', // Dark red
        },
        accent1: {
          400: '#7F7948', // Teal
        },
        accent2: {
          400: '#6D9599', // Blue
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}

