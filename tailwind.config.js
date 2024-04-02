/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'primary': '#0891b2',
        'secondary': '#0f766e',
        'tertiary': '#155e75',
      },
      
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1320px',
    }
  }, 
  
  plugins: [],
}


