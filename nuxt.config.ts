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

  gtm: {
    id: "GTM-KPLSWCJZ",
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

  compatibilityDate: "2025-02-10",
})
