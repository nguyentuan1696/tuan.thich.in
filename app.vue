<template>
   <div>
      <!-- Markup shared across all pages, ex: NavBar -->
      <NuxtPage />
    </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'
  },
  htmlAttrs: {
    class:"bg-white"
  }
})
useSeoMeta({
  title: 'Tuan Nguyen | tuan.thich.in',
  ogTitle: 'Tuan Nguyen | tuan.thich.in',
  description: '🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.',
  ogDescription: '🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

