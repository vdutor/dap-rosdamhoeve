module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', "serif"] 
      },
      colors: {
        blueGreen: '#0E6F70',
        blue: '#75ABB0',
        lightBlue: '#8FBAAC',
        green: '#B9C422',
        lightGreen: '#D4D991'
      },
      backgroundImage: (theme) => ({
        dog: "url('../img/bg-image.jpg')",
      }),
    },
  },
  plugins: [],
}
