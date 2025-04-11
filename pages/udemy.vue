<template>
   <h1 class="mb-8">Get Udemy</h1>
    
    <div class="flex flex-col items-center justify-center">
      <div class="flex gap-4 mb-6 w-full max-w-md">
        <button 
          @click="getUdemy"
          class="w-full border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded"
        >
          Get Udemy
        </button>
        
        <button 
          @click="getLoginCode"
          class="w-full border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded"
        >
          Get Login Code
        </button>
      </div>

      <div v-if="result" class="mt-4 p-4 bg-gray-100 rounded w-full max-w-md">
        <div class="font-mono" v-html="result"></div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      result: null
    }
  },
  methods: {
    getUdemy() {
      this.result = `<div class="space-y-2">
        <div><strong>ID:</strong> nguyentuanudemy@gmail.com</div>
        <div><strong>Password:</strong> trang654321</div>
      </div>`
    },
    getLoginCode() {
      
      this.result = 'Đang làm tính năng này'
    }
  }
}
</script>