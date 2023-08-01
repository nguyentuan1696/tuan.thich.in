<template>
  <main class="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
    <aside class="-ml-[8px] mb-16 tracking-tight">
      <TheHeader />
    </aside>
    <section>
      <NuxtPage />
    </section>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">

const hotJar = `(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3594748,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
useHead({
  bodyAttrs: {
    class:
      'antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto',
  },
  htmlAttrs: {
    class: 'bg-white',
  },
  script: [
    {
      innerHTML: process.env.NODE_ENV === 'development' ? '' : hotJar,
    },
  ],
})
useSeoMeta({
  title: 'Tuan Nguyen | tuan.thich.in',
  ogTitle: 'Tuan Nguyen | tuan.thich.in',
  description:
    '🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.',
  ogDescription:
    '🦄 My portfolio built with Nuxt3, Tailwind CSS, and Cloudflare Pages.',
  ogImage: 'https://tuan.thich.in/img/ogimage.png',
  twitterCard: 'summary_large_image',
})
</script>
