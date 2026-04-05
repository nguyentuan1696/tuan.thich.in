// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    head: {
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          async: true,
          defer: true,
          'data-website-id': '8ed455c8-89ac-48ce-8669-6c2f1080b668'
        }
      ]
    }
  },

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

  runtimeConfig: {
    public: {
      // For pubic key
    },
  },

  compatibilityDate: "2025-02-10",
})
