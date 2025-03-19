<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useRuntimeConfig } from "#app"

useHead({
  title: "Bookmarks",
  meta: [
    {
      name: "description",
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

const sortedItems = computed(() => {
  return Object.values(items.value)
    .filter((item) => item.status !== "2")
    .sort((a, b) => b.time_added - a.time_added)
})

const isEmpty = computed(() => !loading.value && sortedItems.value.length === 0)

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

    <ul
      v-else-if="!isEmpty"
      class="list-disc pl-4 space-y-2"
      aria-label="Bookmarks list"
    >
      <li v-for="item in sortedItems" :key="item.item_id">
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
