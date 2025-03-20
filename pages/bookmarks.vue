<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useRuntimeConfig } from "#app"

useHead({
  title: "Bookmarks",
  meta: [
    {
      name: "Bookmarks",
      content: "My curated collection of bookmarks from Pocket",
    },
  ],
})

interface PocketItem {
  readonly item_id: string
  readonly resolved_title?: string
  readonly given_title?: string
  readonly resolved_url: string
  readonly time_added: number
  readonly status: string
}

const runtimeConfig = useRuntimeConfig()
const items = ref<Record<string, PocketItem>>({})
const loading = ref(false)
const error = ref<string | null>(null)
const currentPage = ref(1)
const itemsPerPage = 25

const sortedItems = computed(() => {
  return Object.values(items.value)
    .filter((item) => item.status !== "2")
    .sort((a, b) => b.time_added - a.time_added)
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedItems.value.slice(start, end)
})

const totalPages = computed(() =>
  Math.ceil(sortedItems.value.length / itemsPerPage)
)
const isEmpty = computed(() => !loading.value && sortedItems.value.length === 0)
const showPagination = computed(() => totalPages.value > 1)

const changePage = (page: number) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const fetchItems = async () => {
  if (loading.value) return

  loading.value = true
  error.value = null

  try {
    const response = await fetch("https://getpocket.com/v3/get", {
      method: "POST",
      headers: {
        "X-Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        consumer_key: runtimeConfig.public.pocketConsumerKey,
        access_token: runtimeConfig.public.pocketAccessToken,
        detailType: "simple",
      }),
    })

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    items.value = data.list
  } catch (e) {
    error.value = e instanceof Error ? e.message : "An error occurred"
    console.error("Failed to fetch bookmarks:", e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchItems)
</script>

<template>
  <div>
    <h1 class="mb-8">Bookmarks</h1>

    <div v-if="loading" class="text-gray-500" role="status">Loading...</div>

    <template v-else-if="!isEmpty">
      <ul class="list-disc pl-4 space-y-2 mb-8" aria-label="Bookmarks list">
        <li v-for="item in paginatedItems" :key="item.item_id">
          <a
            :href="item.resolved_url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-gray-800 transition-colors"
          >
            {{ item.resolved_title || item.given_title || "Untitled" }}
          </a>
        </li>
      </ul>

      <!-- Pagination -->
      <div v-if="showPagination" class="flex justify-center gap-2 mt-8">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="[
            'px-3 py-1 rounded',
            currentPage === page
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
          :aria-current="currentPage === page ? 'page' : undefined"
        >
          {{ page }}
        </button>
      </div>
    </template>

    <div v-else class="text-gray-500">No bookmarks found.</div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
