module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-texture': "url('/assets/images/cubes.png')",
      })
    }
  }
}