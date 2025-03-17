<script lang="ts" setup>
useHead({
  title: "Documents",
})

// Document data structure
interface Document {
  id: string
  name: string
  lastModified: string
  url: string
}

// Sample document data
const documents: Document[] = [
  {
    id: "1",
    name: "Distributed Systems for practitioners.pdf",
    lastModified: "2025-02-24",
    url: "https://drive.proton.me/urls/4V00RDET1G#dNvNhhC7YqWJ",
  },
  {
    id: "2",
    name: "CMU 15-441/641: Networking and the Internet, Fall 2024",
    lastModified: "2025-02-28",
    url: "https://drive.proton.me/urls/DQ7SVVNKT0#VCjlIl1U6M88",
  },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-6 sm:py-8">
    <h1 class="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Documents</h1>

    <div class="grid gap-4 sm:gap-6">
      <!-- Document Card -->
      <div
        v-for="doc in documents"
        :key="doc.id"
        class="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 p-4 sm:p-5"
      >
        <div class="flex flex-col sm:flex-row sm:items-center gap-4">
          <!-- Document Icon -->
          <div class="flex-shrink-0">
            <svg
              class="w-8 h-8 sm:w-10 sm:h-10 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
              ></path>
            </svg>
          </div>

          <!-- Document Info -->
          <div class="flex-grow min-w-0">
            <h2
              class="text-lg sm:text-xl font-semibold group-hover:text-blue-600 transition-colors truncate"
            >
              <a :href="doc.url" target="_blank" rel="noopener noreferrer">
                {{ doc.name }}
              </a>
            </h2>
            <div
              class="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-500"
            >
              <time>{{
                new Date(doc.lastModified).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}</time>
            </div>
          </div>

          <!-- Download Button -->
          <div class="flex-shrink-0 mt-3 sm:mt-0">
            <a
              :href="doc.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full sm:w-auto items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="documents.length === 0"
        class="text-center py-12 sm:py-20 text-gray-500"
      >
        <p>Chưa có tài liệu nào.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
