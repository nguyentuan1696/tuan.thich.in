export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_SPOTIFY_CLIENT_ID: string
      NUXT_SPOTIFY_CLIENT_SECRET: string
      NUXT_SPOTIFY_REFRESH_TOKEN: string
    }
  }
}
