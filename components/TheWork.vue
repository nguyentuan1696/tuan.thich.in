<template>
  <section class="flex flex-col gap-x-3.5 gap-y-3.5">
    <h2 class="font-bold text-xl tracking-tighter">Work</h2>
    <ul class="flex flex-wrap items-start gap-x-3.5 gap-y-3.5">
      <li class="px-3 py-4 border w-full">
        <NuxtLink
          to="https://www.thichtienganh.com"
          target="_blank"
          rel="noopener"
          class="flex justify-between items-center"
        >
          <div>
            <p class="font-bold">Thich Tieng Anh</p>
            <p>thichtienganh.com</p>
          </div>
          <IconArrowUpRight />
        </NuxtLink>
      </li>
      <li class="px-3 py-4 border w-full">
        <NuxtLink
          to="https://www.thichvanhoc.com"
          target="_blank"
          rel="noopener"
          class="flex justify-between items-center"
        >
          <div>
            <p class="font-bold">Thich Van Hoc</p>
            <p>thichvanhoc.com</p>
          </div>
          <IconArrowUpRight />
        </NuxtLink>
      </li>
      <li class="px-3 py-4 border w-full">
        <NuxtLink
          to="https://www.thichtailieu.com"
          target="_blank"
          rel="noopener"
          class="flex justify-between items-center"
        >
          <div>
            <p class="font-bold">Thich Tai Lieu</p>
            <p>thichtailieu.com</p>
          </div>
          <IconArrowUpRight />
        </NuxtLink>
      </li>
      <li class="px-3 py-4 border w-full">
        <NuxtLink
          to="https://anh.thich.in"
          target="_blank"
          rel="noopener"
          class="flex justify-between items-center"
        >
          <div>
            <p class="font-bold">Thich Anh</p>
            <p>anh.thich.in</p>
          </div>
          <IconArrowUpRight />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
