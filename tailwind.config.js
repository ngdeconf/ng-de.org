/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Angular colors with Berlin red influence
        primary: {
          DEFAULT: '#DD0031',
          50: '#FFE6EB',
          100: '#FFCCD7',
          200: '#FF99AF',
          300: '#FF6687',
          400: '#FF335F',
          500: '#DD0031',
          600: '#B80029',
          700: '#930020',
          800: '#6E0018',
          900: '#49000F'
        },
        secondary: {
          DEFAULT: '#C3002F',
          50: '#FFE6EB',
          100: '#FFCCD6',
          200: '#FF99AD',
          300: '#FF6684',
          400: '#FF335B',
          500: '#C3002F',
          600: '#A00026',
          700: '#7D001E',
          800: '#5A0016',
          900: '#37000E'
        },
        // Berlin colors
        berlin: {
          red: '#E03232',
          black: '#202020',
          yellow: '#FFCE00'
        },
        accent: '#3700B3' // Angular accent color
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif']
      },
      backgroundImage: {
        'berlin-pattern':
          "url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')"
      }
    }
  },
  plugins: []
};
