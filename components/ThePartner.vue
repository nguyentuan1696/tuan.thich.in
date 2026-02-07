<template>
  <section class="flex flex-col gap-x-3.5 gap-y-3.5">
    <h2 class="text-base">Partners</h2>
    <ul class="list-disc pl-4 space-y-2">
      <li v-for="(partner, index) in partners" :key="index">
        <NuxtLink
          :to="partner.link"
          target="_blank"
          rel="noopener"
          class="text-gray-500"
        >
          {{ partner.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          title: "BlueNet",
          link: "https://bluenet.vn",
        },
        {
          title: "Anawim English",
          link: "https://anawim.vn",
        },
      ],
    }
  },
}
</script>
