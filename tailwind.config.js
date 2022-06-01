module.exports = {
  purge: {
    enabled: true,
    content: [
      './index.html',
      'src/**/*.tsx'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pageup': "url('/img/pageup.jpg')",
        'carsales': "url('/img/carsales.jpg')",
        'flip': "url('/img/flip.jpg')",
        'ifs': "url('/img/ifs.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
