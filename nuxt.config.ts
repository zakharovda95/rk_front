export default defineNuxtConfig({
  app: {
    head: {
      title: 'Римского Корсакова, 22',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      formatDetection: 'telephone=no',
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

  css: ['~/assets/styles/main.css', 'vue-final-modal/style.css'],

  modules: ['@pinia/nuxt'],

  runtimeConfig: {
    public: {
      BACK_API: '',
    },
  },
});
