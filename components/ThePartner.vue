<template>
  <section class="space-y-4">
    <h2 class="text-lg font-semibold border-b pb-1">Partners</h2>
    <div class="flex flex-wrap gap-4">
      <NuxtLink
        v-for="(partner, index) in partners"
        :key="index"
        :to="partner.link"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center px-4 py-2 border rounded-full hover:bg-gray-50 transition-colors text-gray-700"
      >
        {{ partner.title }}
      </NuxtLink>
    </div>
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
      ],
    }
  },
}
</script>
