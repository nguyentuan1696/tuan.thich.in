<template>
  <section class="flex flex-col gap-3.5">
    <h2 class="font-bold text-xl tracking-tighter">{{ title }}</h2>
    <div>
      <ul class="flex flex-wrap items-start gap-4">
        <li
          v-for="principle in principles"
          :key="principle"
          class="border px-3 py-2 rounded-xl text-sm"
        >
          {{ principle }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const title = "Work principles"
const principles = [
  "Integrity",
  "Accountability",
  "Collaboration",
  "Professionalism",
]
</script>
