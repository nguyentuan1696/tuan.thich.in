<template>
  <section class="space-y-4">
    <h2 class="text-lg font-semibold border-b pb-1">Tech Stack</h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in techList"
        :key="tech"
        class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
      >
        {{ tech }}
      </span>
    </div>
  </section>
</template>

<script setup>
const techList = [
  "Golang",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Apache Kafka",
  "Ansible",
]
</script>
