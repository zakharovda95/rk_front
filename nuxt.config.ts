export default defineNuxtConfig({
  app: {
    head: {
      title: 'Римского Корсакова, 22',
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

  modules: ['@pinia/nuxt', '@vant/nuxt'],
});
