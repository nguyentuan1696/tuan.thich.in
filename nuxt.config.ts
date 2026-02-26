// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/google-fonts",
    "@nuxt/scripts",
  ],

  googleFonts: {
    families: {
      "Be+Vietnam+Pro": {
        wght: [300, 400, 500, 600, 700],
      },
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  content: {
    // ... options
  },


  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
    rollupConfig: {
      output: {
        generatedCode: {
          symbols: true,
        },
      },
    },
  },

  scripts: {
    registry: {
      umamiAnalytics: {
        websiteId: '8ed455c8-89ac-48ce-8669-6c2f1080b668'
      }
    }
  },

  compatibilityDate: "2025-02-10",
})