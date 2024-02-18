/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F74509',
        },
        secondary:{
          50: '#789744',
        },
        tertiary: {
          50: '#F2E7CE',
        },
      }
    },
    
  },
  plugins: [],
}

