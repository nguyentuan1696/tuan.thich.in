<script lang="ts" setup>
useHead({
  title: "Blog",
})
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <header class="mb-8">
        <h1 class="text-xl font-bold">{{ doc.title }}</h1>
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
  @apply text-gray-900 font-bold mb-4;
}

.prose h1 {
  @apply text-xl;
}
.prose h2 {
  @apply text-xl;
}
.prose h3 {
  @apply text-lg;
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
</style>
