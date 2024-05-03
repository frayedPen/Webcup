/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          400: '#FAF3DD',
        },
        secondary: {
          400: '#4A7C59',
          600: '#183E33',
        },
        accent1: {
          400: '#68B0AB',
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}

