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
    name: "Distributed Systems for practitioners",
    url: "https://bit.ly/4mcTAvE",
  },
  {
    id: "1",
    name: "Grokking Modern System Design Interview for Engineers & Managers",
    url: "https://bit.ly/3YJwjaR",
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
