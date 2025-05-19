<template>
  <div>
    <h1 class="mb-8">Udemy</h1>

    <div class="flex flex-col space-y-4">
      <p class="mb-6">
        Sử dụng thông tin tài khoản dưới đây để đăng nhập vào Udemy.
      </p>

      <p>
        Bước 1:
        <a 
        href="https://www.udemy.com/join/login-popup/?passwordredirect=True" 
        target="_blank" 
        rel="noopener" 
        class="mb-6 text-blue-500 hover:underline"
      >
        Đi đến trang đăng nhập Udemy
      </a>
    </p>
    <p class="flex flex-col">
      Bước 2: Nhập thông tin tài khoản:
      <button @click="toggleAccountInfo" class="mt-2 mb-4 px-4 py-2 border rounded">
        {{ showAccountInfo ? 'Ẩn thông tin tài khoản' : 'Hiện thông tin tài khoản' }}
      </button>

      <transition name="slide-fade">
        <div v-if="showAccountInfo" class="bg-gray-100 p-4 rounded-md border border-gray-300">
          <code class="flex flex-col space-y-2">
            <div><strong>ID:</strong> nguyentuanudemy@gmail.com</div>
            <div><strong>Password:</strong> trang654321</div>
          </code>
        </div>
      </transition>
    </p>
     

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      showAccountInfo: false
    }
  },
  methods: {
    toggleAccountInfo() {
      this.showAccountInfo = !this.showAccountInfo;
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>