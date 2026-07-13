<script setup lang="ts">
const showDraftPosts = import.meta.dev
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-lg font-semibold mb-12">Nguyễn Tuấn</h2>

    <p>
      Mình là một thợ code, luôn thích khám phá, học hỏi những điều mới và xây dựng những sản phẩm mang lại giá trị thiết thực.
    </p>

    <p>
      Hiện đang phát triển các dự án như
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
       đồng thời cộng tác với
      <NuxtLink
        to="https://bluenet.vn"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >BlueNet</NuxtLink
      > phát triển các sản phẩm phần mềm cho khách hàng.
    </p>

    <div class="space-y-4">
      <p>
        Một vài
        <NuxtLink
          to="/notes"
          class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
          >bài viết</NuxtLink
        > nổi bật:
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
     Xem thêm thông tin về mình trên
      <NuxtLink
        to="https://github.com/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >Github</NuxtLink
      >,
      <NuxtLink
        to="https://linkedin.com/in/nguyentuan1696/"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >LinkedIn</NuxtLink
      > hoặc liên hệ qua
      <NuxtLink
        to="https://t.me/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
        >Telegram</NuxtLink
      >.
      
    </p>
  </section>
</template>
