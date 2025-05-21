<template>
  <div>
    <h1 class="mb-8">Udemy</h1>

    <div class="flex flex-col space-y-4">
      <p class="mb-6">
        Use the account information below to log in to Udemy.
      </p>

      <p>
        Step 1:
        <a 
        href="https://www.udemy.com/join/passwordless-auth/?next=%2Fhome%2Fmy-courses%2F&action=login&mode" 
        target="_blank" 
        rel="noopener" 
        class="mb-6 text-blue-500 hover:underline"
      >
        Go to the Udemy login page
      </a>
    </p>
    <p class="flex flex-col">
      Step 2: Enter account information:
      <button @click="toggleAccountInfo" class="mt-2 mb-4 px-4 py-2 border rounded">
        {{ showAccountInfo ? 'Hide account information' : 'Show account information' }}
      </button>

      <transition name="slide-fade">
        <div v-if="showAccountInfo" class="">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-2 w-full">
              <strong>ID:</strong>
              <div class="flex flex-grow border rounded overflow-hidden">
                <input type="text" value="nguyentuanudemy@gmail.com" readonly class="flex-grow px-2 py-1 bg-gray-50 text-gray-800 border-none focus:outline-none" />
                <button @click="copyToClipboard('nguyentuanudemy@gmail.com', 'id')" class="px-3 py-1 border-l text-sm bg-gray-200 hover:bg-gray-300 relative"><ClipboardCopy class="w-4 h-4" />
                  
                </button>
              </div>
            </div>
            <div class="flex items-center space-x-2 w-full">
              <strong>Password:</strong>
              <div class="flex flex-grow border rounded overflow-hidden">
                <input type="text" value="trang654321" readonly class="flex-grow px-2 py-1 bg-gray-50 text-gray-800 border-none focus:outline-none" />
                <button @click="copyToClipboard('trang654321', 'password')" class="px-3 py-1 border-l text-sm bg-gray-200 hover:bg-gray-300 relative"><ClipboardCopy class="w-4 h-4" />
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </p>
     

    </div>
  </div>
</template>

<script>
import { ClipboardCopy } from 'lucide-vue-next';

export default {
  data() {
    return {
      result: null,
      showAccountInfo: false,
    }
  },
  components: {
    ClipboardCopy
  },
  methods: {
    toggleAccountInfo() {
      this.showAccountInfo = !this.showAccountInfo;
    },
    copyToClipboard(text, type) { // Removed event parameter, added type parameter
      navigator.clipboard.writeText(text).then(() => {
      }).catch(err => {
        console.error('Failed to copy: ', err);
        // Handle copy error
      });
    },
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