<script lang="ts" setup>
const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const { data: doc } = await useAsyncData("doc", () =>
  queryContent(useRoute().path).findOne()
)

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
  @apply text-blue-500 hover:text-gray-800 transition-colors;
}
</style>
