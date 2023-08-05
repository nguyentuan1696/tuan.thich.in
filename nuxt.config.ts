// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image', 'nuxt-gtag'],
  gtag: {
    id: 'G-BV68HG6H3N',
  },
  nitro: {
    rollupConfig: {
      output: {
        generatedCode: {
          symbols: true,
        },
      },
    },
  },
})
