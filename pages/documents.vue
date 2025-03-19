<script lang="ts" setup>
import { computed } from "vue"

useHead({
  title: "Documents",
  meta: [
    {
      name: "description",
      content: "Collection of technical documents and resources",
    },
    {
      name: "og:title",
      content: "Documents - Technical Resources",
    },
  ],
})

interface Document {
  readonly id: string
  readonly name: string
  readonly url: string
}

const documents: readonly Document[] = [
  {
    id: "1",
    name: "Distributed Systems for practitioners.pdf",
    url: "https://drive.proton.me/urls/4V00RDET1G#dNvNhhC7YqWJ",
  },
  {
    id: "2",
    name: "CMU 15-441/641: Networking and the Internet, Fall 2024",
    url: "https://drive.proton.me/urls/DQ7SVVNKT0#VCjlIl1U6M88",
  },
] as const

const isEmpty = computed(() => documents.length === 0)
// Remove sortedDocuments as it's no longer needed
</script>

<template>
  <div>
    <h1 class="mb-8">Documents</h1>

    <ul
      v-if="!isEmpty"
      class="list-disc pl-4 space-y-2"
      aria-label="Documents list"
    >
      <li v-for="doc in documents" :key="doc.id">
        <a
          :href="doc.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-800 transition-colors"
          :aria-label="doc.name"
        >
          {{ doc.name }}
        </a>
      </li>
    </ul>

    <div v-else class="text-gray-500" role="status">
      <p>Chưa có tài liệu nào.</p>
    </div>
  </div>
</template>
