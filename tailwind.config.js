/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#191414',
          white: '#FFFFFF',
          gray: {
            100: '#B3B3B3',
            200: '#535353',
            300: '#404040',
            400: '#282828',
            500: '#181818',
            600: '#121212'
          }
        }
      }
    },
  },
  plugins: [],
};
