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
      backgroundImage: (theme) => ({
        dog: "url('../img/bg-image.jpg')",
      }),
    },
  },
  plugins: [],
}
