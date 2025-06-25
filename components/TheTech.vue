<template>
  <section class="flex flex-col gap-3.5">
    <h2 class="text-base">{{ title }}</h2>
    <div>
      <ul class="flex flex-wrap items-start gap-4">
        <li v-for="tech in techStack" :key="tech" class="text-gray-500">
          {{ tech }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const title = "Tech Stack"
const techStack = [
  "Javascript",
  "Golang",
  "Python",

  // Databases
  "PostgreSQL",
  "Redis",

  // Infrastructure & Tools
  "Docker",
  "Apache Kafka",
  "Ansible"
]
</script>
