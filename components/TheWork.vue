<template>
  <section class="flex flex-col gap-x-3.5 gap-y-3.5">
    <h2 class="font-bold text-xl tracking-tighter">projects</h2>
    <ul class="flex flex-wrap items-start gap-x-3.5 gap-y-3.5">
      <li
        v-for="(project, index) in projects"
        :key="index"
        class="px-3 py-4 border w-full rounded-xl"
      >
        <NuxtLink
          :to="project.link"
          target="_blank"
          rel="noopener"
          class="flex justify-between items-center"
        >
          <div>
            <p class="font-bold">{{ project.title }}</p>

            <p>{{ project.subtitle }}</p>
          </div>
          <IconArrowUpRight />
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
          title: "Thích Tiếng Anh",
          subtitle: "thichtienganh.com",
          link: "https://www.thichtienganh.com",
        },
        {
          title: "Thích Tài Liệu",
          subtitle: "thichtailieu.com",
          link: "https://www.thichtailieu.com",
        },
      ],
    }
  },
}
</script>
