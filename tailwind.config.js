/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
            200: "#E7B85D",
            400: '#E47F4D', // Light orange
            500: '#B2442C', // Terre rouge
        },
        "primary-dark":{
            // Dark mode equivalents
            200: "#F0D3A5", // Lighten the shade
            400: '#CF6A45', // Darken the shade
            500: '#8D2E17', // Darken the shade
        },
        secondary: {
            400: '#7F7948', // Green
            600: '#6D9599', // Light blue
        },
        "secondary-dark":{
            // Dark mode equivalents
            400: '#5E5A37', // Darken the shade
            600: '#4E7D80', // Darken the shade
        },
        accent1: {
            400: '#7F7948', // Teal
            // Dark mode equivalent
            400: '#5E5A37', // Darken the shade
        },
        "accent1-dark":{
          // Dark mode equivalent
          400: '#5E5A37', // Darken the shade
        },
        accent2: {
            400: '#6d9981', // Light blue
        },
        "accent2-dark":{
          // Dark mode equivalent
          400: '#4E7D80', // Darken the shade
        },
      }
    
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}

