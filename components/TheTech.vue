<template>
  <section class="flex flex-col gap-3.5">
    <h2>{{ title }}</h2>
    <div>
      <ul class="flex flex-wrap items-start gap-4">
        <li v-for="principle in principles" :key="principle" class="text-gray-500">
          {{ principle }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const title = "Tech Stack"
const principles = [
  "Golang",
  "Javascript",
  "ReactJS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Apache Kafka",
]
</script>
