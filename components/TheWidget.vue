<template>
  <section class="grid grid-cols-2 gap-4 gap-x-3.5 gap-y-3.5">
    <div class="grid gap-x-3.5 gap-y-3.5">
      <div class="flex items-center gap-x-3.5 gap-y-3.5">
        <IconSpotify />
        <h2 class="font-bold text-xl tracking-tighter">Now Playing</h2>
      </div>
      <NuxtLink :to="songUrl" target="_blank" rel="noopener">
        <div
          class="flex items-center gap-x-3.5 gap-y-3.5 border rounded-2xl p-2"
        >
          <div class="w-1/4">
            <nuxt-img :src="albumImageUrl" class="rounded-2xl" />
          </div>
          <div>
            <p class="font-semibold line-clamp-2">{{ title }}</p>
            <p class="text-neutral-500">{{ artist }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div></div>
  </section>
</template>

<script setup lang="ts">
interface APIBody {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}
const { data } = await useFetch<APIBody>('/api/spotify')
const albumImageUrl = data?.value?.albumImageUrl
const title = data?.value?.title
const artist = data?.value?.artist
const songUrl = data?.value?.songUrl
</script>
