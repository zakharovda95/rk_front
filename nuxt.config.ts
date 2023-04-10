export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      title: 'Римского Корсакова, 22',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'charset', content: 'utf-8' },
      ],
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
