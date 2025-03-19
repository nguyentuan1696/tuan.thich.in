<template>
  <footer class="text-gray-500 my-10">
    <ul>
      <li class="flex justify-center gap-3">
        <a
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.url"
          target="_blank"
          rel="noopener"
          class="hover:text-gray-800 transition-colors"
        >
          {{ contact.name }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
const contacts = [
  { name: "email", url: "mailto:nguyentuan1696@gmail.com" },
  { name: "github", url: "https://github.com/nguyentuan1696" },
  { name: "linkedin", url: "https://www.linkedin.com/in/nguyentuan1696/" },
  { name: "telegram", url: "https://t.me/nguyentuan1696" },
]
</script>
