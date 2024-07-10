/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors:{
      'black':'#000',
      'blue1': '#1F9D96',
      'white': '#fff',
      'white_05': '#FFFFFF66',
      'white_07': '#FFFFFFB2',

    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        '16': '16px',
        '40': '40px',
      },
      minHeight: {
        'screen': '100vh',
        'small': '550px', // Add this line to extend minHeight
        'medium': '650px',
        'big': '750px',
        
      },
      screens: {
        'xs': '380px',
        'sm': '451px',
        'md': '769px',
        'lg': '1367px',
        'xl': '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.smooth-scroll': {
          'scroll-behavior': 'smooth',
        },
      })
    }
  ],
}

