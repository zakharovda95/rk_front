module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      titleBrown: '#E3BC98',
      lightGray: '#F1F0EE',
      black: '#252120',
      bg: '#FCF9F4',
    },

    fontFamily: {
      'trajan': ['Trajan', 'sans-serif'],
      'helvetica': ['Helvetica', 'sans-serif'],
      'tiny': ['Tiny', 'sans-serif'],
      'regular': ['Regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
