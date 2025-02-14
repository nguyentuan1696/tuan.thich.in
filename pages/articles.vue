<script lang="ts" setup>
useHead({
  title: "Bài viết",
});
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8">Articles</h1>
    
    <!-- Blog List -->
    <ContentList
      path="/articles"
      :query="{
        draft: false,
        sort: [{ date: -1 }],
      }"
      v-slot="{ list }"
    >
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Blog Card -->
        <div
          v-for="blog in list"
          :key="blog._path"
          class="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 cursor-pointer"
        >
          <!-- Thumbnail -->
          <div class="aspect-video overflow-hidden bg-gray-100">
            <img
              v-if="blog.thumbnail"
              :src="blog.thumbnail"
              :alt="blog.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-gray-400 relative">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span class="text-white text-lg font-bold p-2">{{ blog.title }}</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <!-- Date -->
            <time class="text-sm text-gray-500 mb-2 block">
              {{ new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) }}
            </time>
            
            <!-- Title -->
            <h2 class="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
            </h2>

            <!-- Tags -->
            <div v-if="blog.tags" class="flex flex-wrap gap-2">
              <span 
                v-for="tag in blog.tags" 
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
        <!-- ./Blog Card -->
      </div>

      <!-- Empty State -->
      <div v-if="list.length === 0" class="text-center py-20 text-gray-500">
        <p>Chưa có bài viết nào.</p>
      </div>
    </ContentList>
  </div>
</template>

<style></style>