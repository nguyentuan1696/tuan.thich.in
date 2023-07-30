<template>
  <section class="flex flex-col gap-x-3.5 gap-y-3.5">
    <h2 class="font-bold text-xl tracking-tighter">Find me @</h2>
    <div class="flex flex-wrap items-start gap-x-2 gap-y-2">
      <NuxtLink
        to="mailto:nguyentuan1696@gmail.com"
        target="_blank"
        rel="noopener"
        class="inline-flex rounded-2xl items-center px-3 py-2 border"
      >
        <IconEmail class="mr-1" width="20" height="20" /> <span>email</span>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="inline-flex rounded-2xl items-center px-3 py-2 border"
      >
        <IconGithub class="mr-1" width="20" height="20" /> <span>github</span>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="inline-flex rounded-2xl items-center px-3 py-2 border"
      >
        <IconLinkedin class="mr-1" width="20" height="20" />
        <span>linkedin</span>
      </NuxtLink>
      <NuxtLink
        to="https://www.facebook.com/NguyenTuan1696"
        target="_blank"
        rel="noopener"
        class="inline-flex rounded-2xl items-center px-3 py-2 border"
      >
        <IconFacebook class="mr-1" width="20" height="20" />
        <span>facebook</span>
      </NuxtLink>
      <NuxtLink
        to="https://t.me/nguyentuan1696"
        target="_blank"
        rel="noopener"
        class="inline-flex rounded-2xl items-center px-3 py-2 border"
      >
        <IconTelegram class="mr-1" width="20" height="20" />
        <span>telegram</span>
      </NuxtLink>
    </div>
  </section>
</template>
