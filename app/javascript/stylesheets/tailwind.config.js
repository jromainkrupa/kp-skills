const colors = require('tailwindcss/colors')

  module.exports = {
    purge: [
     './app/**/*.html.erb',
     './app/javascript/**/*.js',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
