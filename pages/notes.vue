<script lang="ts" setup>
useHead({ title: "Notes" })
</script>

<template>
  <div>
    <h1 class="mb-8">Notes</h1>
    <ContentList
      path="/notes"
      :query="{ draft: false, sort: [{ date: -1 }] }"
    >
      <template #default="{ list }">
        <ul class="space-y-4 list-disc pl-4">
          <li v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path" class="text-gray-500">
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>

        <p v-if="list.length === 0" class="text-gray-500">
          Chưa có bài viết nào.
        </p>
      </template>
    </ContentList>
  </div>
</template>
