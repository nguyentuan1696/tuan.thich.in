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

  modules: ['@nuxt/image', 'nuxt-gtag', '@nuxt/content'],

  content: {
    // ... options
  },

  gtag: {
    id: 'G-BV68HG6H3N',
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
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
    pocketConsumerKey: process.env.NUXT_POCKET_CONSUMER_KEY,
    pocketAccessToken: process.env.NUXT_POCKET_ACCESS_TOKEN,
  
    public: {
      // For pubic key
      // apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'default value',
    },
  },

  compatibilityDate: '2025-02-10',
})