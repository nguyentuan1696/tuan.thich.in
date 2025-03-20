<template>
  <section class="flex flex-col gap-x-3.5 gap-y-3.5">
    <h2 class="text-base">Projects</h2>
    <ul class="list-disc pl-4 space-y-2">
      <li v-for="(project, index) in projects" :key="index">
        <NuxtLink
          :to="project.link"
          target="_blank"
          rel="noopener"
          class="text-gray-500"
        >
          {{ project.title }}
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
