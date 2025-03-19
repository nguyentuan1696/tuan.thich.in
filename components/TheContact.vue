<template>
  <section class="flex flex-col gap-3.5">
    <h2 class="text-base">{{ title }}</h2>
    <div class="flex flex-wrap items-start gap-2">
      <NuxtLink
        v-for="contact in contacts"
        :key="contact.name"
        :to="contact.url"
        target="_blank"
        rel="noopener"
        class=""
      >
        <span>{{ contact.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const title = "Contacts"

const contacts = [
  { name: "email", url: "mailto:nguyentuan1696@gmail.com" },
  {
    name: "github",
    url: "https://github.com/nguyentuan1696",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nguyentuan1696/",
  },
  {
    name: "telegram",
    url: "https://t.me/nguyentuan1696",
  },
]
</script>
