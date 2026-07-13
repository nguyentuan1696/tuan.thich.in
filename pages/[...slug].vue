<script lang="ts" setup>
const showDraftPosts = import.meta.dev

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('vi-VN')
}

const createDocQuery = () => {
  const contentQuery = queryContent(useRoute().path)

  return showDraftPosts ? contentQuery : contentQuery.where({ draft: false })
}

const { data: doc } = await useAsyncData("doc", () => createDocQuery().findOne())

useHead({
  title: doc.value?.title,
})

useSeoMeta({
  title: doc.value?.title,
  ogTitle: doc.value?.title,
  description: doc.value?.description,
  ogDescription: doc.value?.description,
})
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <header class="mb-8">
        <NuxtLink
          to="/"
          class="mb-12 inline-flex text-base text-gray-400 transition-colors hover:text-gray-900"
        >
          &larr; Quay lại
        </NuxtLink>
        <h1 class="text-xl font-medium">{{ doc.title }}</h1>
        <div class="text-sm text-gray-400">
          {{ doc.date ? formatDate(doc.date) : '' }}
        </div>
      </header>
      <div class="prose">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>

<style>
.prose {
  @apply text-gray-600;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  @apply text-gray-900 font-medium mb-4;
}

.prose h1,
h2,
h3 {
  @apply text-base;
}

.prose p,
.prose ul,
.prose ol {
  @apply mb-4;
}

.prose ul,
.prose ol {
  @apply pl-4 list-disc;
}

.prose li {
  @apply mb-2;
}

.prose p a,
.prose li a,
.prose code a {
  @apply text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900;
}

.prose code {
  @apply bg-gray-100 rounded px-1.5 py-0.5 text-sm text-gray-800;
}

.prose pre {
  @apply bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent p-0 text-sm block;
}
</style>
