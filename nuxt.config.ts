export default defineNuxtConfig({
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
