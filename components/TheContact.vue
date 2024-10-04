<template>
  <section class="flex flex-col gap-3.5">
    <h2 class="font-bold text-xl tracking-tighter">{{ title }}</h2>
    <div class="flex flex-wrap items-start gap-2">
      <NuxtLink
        v-for="contact in contacts"
        :key="contact.name"
        :to="contact.url"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center px-3 py-2 border rounded-xl"
      >
        <component :is="contact.icon" class="mr-1" width="20" height="20" />
        <span>{{ contact.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const title = "Liên hệ @"

const contacts = [
  { name: "email", url: "mailto:nguyentuan1696@gmail.com", icon: "IconEmail" },
  {
    name: "github",
    url: "https://github.com/nguyentuan1696",
    icon: "IconGithub",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nguyentuan1696/",
    icon: "IconLinkedin",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/NguyenTuan1696",
    icon: "IconFacebook",
  },
  {
    name: "telegram",
    url: "https://t.me/nguyentuan1696",
    icon: "IconTelegram",
  },
]
</script>
