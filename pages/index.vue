<template>
  <section class="space-y-10">
    <p>
      I'm Tuan, a developer who loves learning and building cool things. I enjoy diving into new technologies and crafting simple, effective solutions to complex problems.
    </p>

    <p>
      I build projects like
      <NuxtLink
        to="https://www.thichtienganh.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >thichtienganh.com</NuxtLink
      >
      and
      <NuxtLink
        to="https://www.thichtailieu.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >thichtailieu.com</NuxtLink
      >, and collaborate with teams such as
      <NuxtLink
        to="https://bluenet.vn"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >BlueNet</NuxtLink
      >.
    </p>

    <div class="space-y-4">
      <p>
        I also share my experiences and learnings through my
        <NuxtLink
          to="/notes"
          class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
          >notes</NuxtLink
        >:
      </p>
      <ContentList
        path="/notes"
        :query="{ draft: false, limit: 5, sort: [{ date: -1 }] }"
      >
        <template #default="{ list }">
          <ul class="list-disc pl-5 space-y-2">
            <li v-for="article in list" :key="article._path">
              <NuxtLink
                :to="article._path"
                class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
                >{{ article.title }}</NuxtLink
              >
            </li>
          </ul>
        </template>
      </ContentList>
    </div>

    <p>
      You can find my work and connect with me on
      <NuxtLink
        to="https://github.com/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >GitHub</NuxtLink
      >,
      <NuxtLink
        to="https://www.linkedin.com/in/nguyentuan1696/"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >LinkedIn</NuxtLink
      >, or
      <NuxtLink
        to="https://t.me/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >Telegram</NuxtLink
      >
      if you're interested in collaborating or building something meaningful.
    </p>
  </section>
</template>

<script setup lang="ts"></script>
