<script lang="ts" setup>
const { slug } = useRoute().params;
</script>

<template>
  <article class="bg-white rounded-2xl">
    <ContentDoc v-slot="{ doc }">
      <!-- Header  -->
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
          <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>
        </div>
        <img
          v-if="doc.thumbnail"
          :src="doc.thumbnail"
          :alt="doc.title"
          class="w-full rounded-xl"
        />
      </header>
      <!-- ./ Header  -->

      <!-- Content -->
      <div class="mt-4 content p-5">
        <!-- Content  -->
        <ContentRenderer :value="doc" />
        <!-- ./ Content  -->
      </div>
      <!-- ./ Content  -->
    </ContentDoc>
  </article>
</template>

<style>
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
}

.content ul,
.content ol {
  @apply list-disc pl-5;
}

.content li {
  @apply mb-2;
}

.content h1 {
  @apply text-4xl font-bold;
}
.content h2 {
  @apply text-3xl font-bold;
}
.content h3 {
  @apply text-2xl font-bold;
}
.content h4 {
  @apply text-lg font-semibold;
}
.content h5 {
  @apply text-base font-medium;
}
</style>