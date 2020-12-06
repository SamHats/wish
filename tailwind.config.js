module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-texture--aztec': "url('/assets/textures/aztec.svg')",
        'hero-texture--circuit-board': "url('/assets/textures/circuit-board.svg')",
        'hero-texture--endless-clouds': "url('/assets/textures/endless-clouds.svg')",
        'hero-texture--squares-in-squares': "url('/assets/textures/squares-in-squares.svg')",
        'hero-texture--topography': "url('/assets/textures/topography.svg')",

      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}