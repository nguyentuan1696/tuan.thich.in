<template>
  <section class="flex flex-col gap-3.5">
    <h2 class="text-base">{{ title }}</h2>
    <div>
      <ul class="flex flex-wrap items-start gap-4">
        <li v-for="tech in techStack" :key="principle" class="text-gray-500">
          {{ tech }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const title = "Tech Stack"
const techStack = [
  "Golang",
  "Javascript",
  "Python",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Apache Kafka",
]
</script>
