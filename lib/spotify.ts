const runtimeConfig = useRuntimeConfig()

const {
  spotifyClientId: client_id,
  spotifyClientSecret: client_secret,
  spotifyRefreshToken: refresh_token,
} = runtimeConfig

const basic = btoa(`${client_id}:${client_secret}`)
const ENDPOINTS = {
  NOW_PLAYING: `https://api.spotify.com/v1/me/player/currently-playing`,
  TOP_TRACKS: `https://api.spotify.com/v1/me/top/tracks`,
  TOKEN: `https://accounts.spotify.com/api/token`,
}

const fetchWithAuth = async (url: string) => {
  const { access_token } = await getAccessToken()
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

const getAccessToken = async () => {
  const response = await fetch(ENDPOINTS.TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = () => fetchWithAuth(ENDPOINTS.NOW_PLAYING)
export const getTopTracks = () => fetchWithAuth(ENDPOINTS.TOP_TRACKS)
