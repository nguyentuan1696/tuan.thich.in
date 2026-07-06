<script setup lang="ts">
const showDraftPosts = import.meta.dev
</script>

<template>
  <section class="space-y-10">
    <h2 class="text-lg font-semibold">Nguyễn Tuấn</h2>

    <p>
      Một thợ code thích khám phá, học hỏi những điều mới mẻ và xây dựng các sản
      phẩm mang lại giá trị thiết thực.
    </p>

    <p>
      Các dự án đang thực hiện bao gồm
      <NuxtLink
        to="https://thichtienganh.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >thichtienganh.com</NuxtLink
      >,
      <NuxtLink
        to="https://thichtailieu.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >thichtailieu.com</NuxtLink
      >
      bên cạnh việc cộng tác cùng những đội ngũ như
      <NuxtLink
        to="https://bluenet.vn"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >BlueNet</NuxtLink
      >.
    </p>

    <div class="space-y-4">
      <p>
        Những kinh nghiệm và kiến thức tích lũy được chia sẻ qua các bài
        <NuxtLink
          to="/notes"
          class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
          >bài viết</NuxtLink
        >:
      </p>
      <ContentList
        path="/notes"
        :query="{
          ...(showDraftPosts ? {} : { draft: false }),
          limit: 5,
          sort: [{ date: -1 }],
        }"
      >
        <template #default="{ list }">
          <ul class="list-disc pl-5 space-y-2">
            <li v-for="article in list" :key="article._path">
              <NuxtLink
                :to="article._path"
                class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
                >{{ article.title }}</NuxtLink
              >
            </li>
          </ul>
        </template>
      </ContentList>
    </div>

    <p>
      Có thể xem thêm các dự án khác hoặc kết nối qua
      <NuxtLink
        to="https://github.com/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >GitHub</NuxtLink
      >,
      <NuxtLink
        to="https://linkedin.com/in/nguyentuan1696/"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >LinkedIn</NuxtLink
      >, hoặc
      <NuxtLink
        to="https://t.me/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >Telegram</NuxtLink
      >
      để cùng nhau xây dựng những điều ý nghĩa.
    </p>
  </section>
</template>
