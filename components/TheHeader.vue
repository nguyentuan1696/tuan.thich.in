<template>
  <nav class="my-10">
    <!-- Desktop Menu -->
    <div class="hidden md:flex space-x-6">
      <NuxtLink to="/">Tuan Nguyen</NuxtLink>
      <NuxtLink to="/notes">notes</NuxtLink>
      <NuxtLink to="/bookmarks">bookmarks</NuxtLink>
      <NuxtLink to="/documents">documents</NuxtLink>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">Tuan Nguyen</NuxtLink>
        <button @click="toggleMenu" class="text-gray-500 hover:text-gray-700">
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        class="absolute left-0 right-0 bg-white mt-2 py-2 px-4 shadow-lg transition-all duration-300 ease-in-out transform origin-top"
        :class="{ 'opacity-0 scale-y-0': !isMenuOpen, 'opacity-100 scale-y-100': isMenuOpen }"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/notes" @click="closeMenu" class="transition-colors duration-200 hover:text-blue-500">notes</NuxtLink>
          <NuxtLink to="/bookmarks" @click="closeMenu" class="transition-colors duration-200 hover:text-blue-500">bookmarks</NuxtLink>
          <NuxtLink to="/documents" @click="closeMenu" class="transition-colors duration-200 hover:text-blue-500">documents</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.scale-y-0 {
  transform: scaleY(0);
}
.scale-y-100 {
  transform: scaleY(1);
}
</style>
