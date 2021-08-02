module.exports = {
  purge: ['./wwwroot/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pageup': "url('/img/pageup.jpg')",
        'carsales': "url('/img/carsales.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
