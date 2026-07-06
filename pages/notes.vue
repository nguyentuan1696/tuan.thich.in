<script lang="ts" setup>
const showDraftPosts = import.meta.dev

useHead({ title: "Bài viết" })
</script>

<template>
  <section class="space-y-10">
     <h2 class="text-lg font-semibold">Bài viết</h2>
    <ContentList
      path="/notes"
      :query="{
        ...(showDraftPosts ? {} : { draft: false }),
        sort: [{ date: -1 }],
      }"
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
  </section>
</template>
