export default defineNuxtConfig({
  app: {
    head: {
      title: 'Римского Корсакова, 22',
      script: [{ src: 'helpers/plugins/ScrollSmoother.min.js', defer: true }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['gsap'],
  },

  css: ['~/assets/styles/main.css'],

  modules: ['@pinia/nuxt'],
});
