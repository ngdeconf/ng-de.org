/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Angular official colors
        primary: {
          DEFAULT: '#DD0031', // Angular red
          50: '#FFE6EB',
          100: '#FFCCD7',
          200: '#FF99AF',
          300: '#FF6687',
          400: '#FF335F',
          500: '#DD0031', // Angular primary red
          600: '#B80029',
          700: '#930020',
          800: '#6E0018',
          900: '#49000F'
        },
        secondary: {
          DEFAULT: '#C3002F', // Angular secondary red
          50: '#FFE6EB',
          100: '#FFCCD6',
          200: '#FF99AD',
          300: '#FF6684',
          400: '#FF335B',
          500: '#C3002F', // Angular secondary red
          600: '#A00026',
          700: '#7D001E',
          800: '#5A0016',
          900: '#37000E'
        },
        // Angular accent colors
        accent: {
          DEFAULT: '#3700B3', // Angular indigo/purple accent
          50: '#EDE7F6', // Light indigo
          100: '#D1C4E9',
          200: '#B39DDB',
          300: '#9575CD',
          400: '#7E57C2',
          500: '#673AB7', // Deep purple
          600: '#5E35B1',
          700: '#512DA8',
          800: '#4527A0',
          900: '#311B92'
        },
        // Angular supporting color
        angular: {
          red: '#DD0031', // Main Angular red
          darkRed: '#C3002F', // Darker Angular red
          black: '#1A1A1A', // Angular dark
          white: '#FFFFFF',
          grey: '#F1F1F1'
        }
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
