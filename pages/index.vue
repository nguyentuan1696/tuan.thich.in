<template>
  <section class="space-y-10">
    <h2 class="text-lg font-semibold">Nguyễn Tuấn</h2>

    <p>
      Mình là một thợ code, thích học hỏi về mọi thứ và xây dựng các sản phẩm giải quyết được các vấn đề thiết thực.
    </p>

    <p>
      Mình xây dựng các dự án như
      <NuxtLink
        to="https://www.thichtienganh.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >thichtienganh.com</NuxtLink
      >
      và
      <NuxtLink
        to="https://www.thichtailieu.com"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >thichtailieu.com</NuxtLink
      >, đồng thời cộng tác với các đội ngũ như
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
        Mình cũng chia sẻ những kinh nghiệm và kiến thức học được qua các bài
        <NuxtLink
          to="/notes"
          class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
          >ghi chép</NuxtLink
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
      Bạn có thể xem các dự án của mình và kết nối với mình qua
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
      >, hoặc
      <NuxtLink
        to="https://t.me/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
        >Telegram</NuxtLink
      >
      nếu bạn quan tâm đến việc hợp tác hoặc cùng nhau xây dựng điều gì đó ý nghĩa.
    </p>
  </section>
</template>

<script setup lang="ts"></script>
