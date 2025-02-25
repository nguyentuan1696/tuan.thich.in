<!-- App.vue -->
<template>
  <div class="container">
    <header>
      <h1 class="text-3xl font-bold mb-8">Bookmarks</h1>
      <div class="filters">
        <input
          v-model="searchQuery"
          placeholder="Search items..."
          class="search-input"
        />
        <select v-model="selectedTag" class="tag-filter">
          <option value="">All Tags</option>
          <option v-for="tag in uniqueTags" :key="tag" :value="tag">
            {{ tag }}
          </option>
        </select>
      </div>
    </header>

    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="items-container" v-else>
      <article
        v-for="item in paginatedItems"
        :key="item.item_id"
        class="item-card"
      >
        <!-- Thumbnail section -->
        <div class="item-thumbnail" v-if="item.top_image_url">
          <img
            :src="item.top_image_url"
            :alt="item.resolved_title || item.given_title"
            @error="handleImageError"
          />
        </div>

        <div class="item-content">
          <h2 class="item-title">
            <a :href="item.resolved_url" target="_blank">
              {{ item.resolved_title || item.given_title || "Untitled" }}
            </a>
          </h2>

          <div class="item-meta">
            <span>Added on {{ formatDate(item.time_added) }}</span>
            <span v-if="item.time_to_read">
              • {{ item.time_to_read }} min read
            </span>
          </div>

          <p v-if="item.excerpt" class="item-excerpt">
            {{ item.excerpt }}
          </p>

          <div v-if="item.tags" class="item-tags">
            <span
              v-for="(tag, name) in item.tags"
              :key="name"
              class="tag"
              @click="selectedTag = name"
            >
              {{ name }}
            </span>
          </div>
        </div>
      </article>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button 
        @click="currentPage > 1 && (currentPage--)" 
        :disabled="currentPage === 1"
        class="page-button"
      >
        &laquo; Previous
      </button>
      
      <div class="page-numbers">
        <button 
          v-for="page in displayedPageNumbers" 
          :key="page"
          @click="currentPage = page"
          :class="['page-number', currentPage === page ? 'active' : '']"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        @click="currentPage < totalPages && (currentPage++)" 
        :disabled="currentPage === totalPages"
        class="page-button"
      >
        Next &raquo;
      </button>
    </div>
    
    <div v-if="!loading && filteredItems.length === 0" class="no-results">
      No bookmarks found matching your filters.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue"
import { useRuntimeConfig } from "#app"

interface PocketItem {
  item_id: string
  resolved_title?: string
  given_title?: string
  resolved_url: string
  top_image_url?: string
  excerpt?: string
  time_added: number
  time_to_read?: number
  tags?: Record<string, any>
  status: string
}

const runtimeConfig = useRuntimeConfig()
const items = ref<Record<string, PocketItem>>({})
const searchQuery = ref("")
const selectedTag = ref("")
const loading = ref(false)
const error = ref<string | null>(null)

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

const filteredItems = computed(() => {
  return Object.values(items.value)
    .filter((item) => item.status !== "2")
    .filter((item) => {
      const searchLower = searchQuery.value.toLowerCase()
      const matchesSearch =
        !searchQuery.value ||
        item.resolved_title?.toLowerCase().includes(searchLower) ||
        item.excerpt?.toLowerCase().includes(searchLower)

      const matchesTag =
        !selectedTag.value || (item.tags && item.tags[selectedTag.value])

      return matchesSearch && matchesTag
    })
    .sort((a, b) => b.time_added - a.time_added)
})

const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage)
})

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredItems.value.slice(startIndex, endIndex)
})

// Dynamic page number display
const displayedPageNumbers = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    // If we have 7 or fewer pages, show all page numbers
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  
  // Always include first and last page
  const pages = [1]
  
  // Determine the range around the current page
  let rangeStart = Math.max(2, current - 1)
  let rangeEnd = Math.min(total - 1, current + 1)
  
  // Adjust to always show 3 pages in the middle
  if (rangeEnd - rangeStart < 2) {
    if (current <= 4) {
      rangeEnd = Math.min(4, total - 1)
    } else {
      rangeStart = Math.max(total - 3, 2)
    }
  }
  
  // Add ellipsis if needed before the range
  if (rangeStart > 2) {
    pages.push(-1) // -1 is a placeholder for ellipsis
  }
  
  // Add the range pages
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i)
  }
  
  // Add ellipsis if needed after the range
  if (rangeEnd < total - 1) {
    pages.push(-2) // -2 is another placeholder for ellipsis
  }
  
  // Add the last page
  if (total > 1) {
    pages.push(total)
  }
  
  return pages
})

const uniqueTags = computed(() => {
  const tags = new Set<string>()
  Object.values(items.value).forEach((item) => {
    if (item.tags) {
      Object.keys(item.tags).forEach((tag) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// Reset to first page when filters change
watch([searchQuery, selectedTag], () => {
  currentPage.value = 1
})

const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString()
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = "https://via.placeholder.com/150x100"
}

const selectTag = (tag: string) => {
  selectedTag.value = tag
}

const fetchItems = async () => {
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
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    items.value = data.list
  } catch (e) {
    error.value = e instanceof Error ? e.message : "An error occurred"
    console.error("Error fetching items:", e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchItems()
})
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  margin-bottom: 30px;
}

.filters {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.search-input,
.tag-filter {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.search-input {
  flex: 1;
}

.item-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
}

.item-thumbnail {
  flex-shrink: 0;
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
}

.item-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.item-thumbnail img:hover {
  transform: scale(1.05);
}

.item-content {
  flex: 1;
  min-width: 0; /* Prevents flex item from overflowing */
}

.item-title {
  margin: 0 0 10px 0;
  font-size: 1.2em;
}

.item-title a {
  color: #2c5282;
  text-decoration: none;
}

.item-title a:hover {
  text-decoration: underline;
}

.item-meta {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}

.item-excerpt {
  color: #444;
  margin: 10px 0;
  line-height: 1.5;
  display: -webkit-box;
  display: flex;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.item-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: #e2e8f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8em;
  color: #4a5568;
  cursor: pointer;
}

.tag:hover {
  background-color: #cbd5e0;
}

/* Pagination styles */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
}

.page-button {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  color: #444;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.page-button:hover:not(:disabled) {
  background-color: #e9ecef;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

.page-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.page-number:hover:not(.active) {
  background-color: #e9ecef;
}

.page-number.active {
  background-color: #2c5282;
  color: white;
  border-color: #2c5282;
}

.no-results {
  text-align: center;
  padding: 40px 0;
  color: #666;
  font-size: 16px;
}

.loading, .error {
  text-align: center;
  padding: 40px 0;
  color: #666;
  font-size: 16px;
}

.error {
  color: #e53e3e;
}

/* Responsive design */
@media (max-width: 768px) {
  .item-card {
    flex-direction: column;
  }

  .item-thumbnail {
    width: 100%;
    height: 200px;
  }

  .pagination {
    flex-direction: column;
    gap: 15px;
  }

  .page-numbers {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>