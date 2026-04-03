<template>
  <section class="space-y-4">
    <h2 class="text-lg font-semibold border-b pb-1">Projects</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li v-for="(project, index) in projects" :key="index">
        <NuxtLink
          :to="project.link"
          target="_blank"
          rel="noopener"
          class="block p-4 border rounded-lg hover:border-gray-400 transition-colors bg-gray-50"
        >
          <div class="font-medium text-gray-800">{{ project.title }}</div>
          <div class="text-sm text-gray-500 truncate">{{ project.link }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "thichtienganh.com",
          link: "https://www.thichtienganh.com",
        },
        {
          title: "thichtailieu.com",
          link: "https://www.thichtailieu.com",
        },
      ],
    }
  },
}
</script>
