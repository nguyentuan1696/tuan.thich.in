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

  runtimeConfig: {
    spotifyClientId: process.env.NUXT_SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.NUXT_SPOTIFY_CLIENT_SECRET,
    spotifyRefreshToken: process.env.NUXT_SPOTIFY_REFRESH_TOKEN,

    public: {
      // For pubic key
      // apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'default value',
      pocketConsumerKey: process.env.NUXT_PUBLIC_POCKET_CONSUMER_KEY,
      pocketAccessToken: process.env.NUXT_PUBLIC_POCKET_ACCESS_TOKEN,
      posthogPublicKey: process.env.NUXT_PUBLIC_POSTHOG_PUBLIC_KEY,
      posthogHost: "https://us.i.posthog.com",
      posthogDefaults: "2025-05-24",
    },
  },

  compatibilityDate: "2025-02-10",
})
