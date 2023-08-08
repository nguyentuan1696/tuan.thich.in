<template>
  <section v-if="item.isPlaying" class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-3.5 gap-y-3.5">
    <div class="grid gap-x-3.5 gap-y-3.5">
      <div class="flex items-center gap-x-3.5 gap-y-3.5">
        <IconSpotify />
        <h2 class="font-bold text-xl tracking-tighter">Now Playing</h2>
      </div>
      <NuxtLink :to="item.songUrl" target="_blank" rel="noopener">
        <div
          class="flex items-center gap-x-3.5 gap-y-3.5 border rounded-2xl p-2"
        >
          <div class="w-1/4">
            <!-- <nuxt-img
              :src="`${
                item.albumImageUrl != 'undefined' && item.albumImageUrl
              }`"
              format="webp"
              class="rounded-2xl"
            /> -->
            <img :src="item.albumImageUrl" class="rounded-2xl">
          </div>
          <div>
            <p class="font-semibold line-clamp-2">{{ item.title }}</p>
            <p class="text-neutral-500 text-sm">{{ item.artist }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface APIBody {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

const item = ref({} as any)

async function getData() {
  const { data } = await useFetch<APIBody>('/api/spotify')
  item.value = data.value
}


getData()


</script>
