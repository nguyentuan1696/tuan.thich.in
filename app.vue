<template>
  <main class="min-h-screen flex flex-col max-w-2xl mx-auto px-4 w-full">
    <TheHeader />
    <NuxtPage class="flex-1" />
  </main>
</template>

<script setup lang="ts">
import { TheHeader } from "#components"

useHead({
  htmlAttrs: {
    lang: 'vi'
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
})

useSeoMeta({
  title: "Tuan Nguyen | tuan.thich.in",
  ogTitle: "Tuan Nguyen | tuan.thich.in",
  description:
    "🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.",
  ogDescription:
    "🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.",
  ogImage: "https://tuan.thich.in/img/ogimage.png",
  twitterCard: "summary_large_image",
})
</script>
