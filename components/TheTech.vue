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
  "NodeJS",
  "Javascript",
  "ReactJS",
  "NextJS",
  "VueJS",
  "NuxtJS",
  "TailwindCSS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Gitlab CI/CD",
  "Github Action",
  "RabbitMQ",
  "Apache Kafka",
  "Nginx",
  "Ansible",
]
</script>
