<template>
  <div>
    <h1 class="mb-8">Udemy</h1>

    <div class="flex flex-col space-y-4">
      <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h2 class="text-lg font-semibold mb-2">Support</h2>
        <p class="mb-4">If you find this account helpful, please consider buying me a coffee!</p>
        <a 
          href="https://www.paypal.com/paypalme/NguyenTuan1696" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          <span class="mr-2">Donate via PayPal</span>
          <BanknoteArrowUp class="h-5 w-5" />
        </a>
      </div>

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
        <div class="mt-4 flex flex-col space-y-4">
          <div class="flex items-center space-x-2 w-full">
            <strong>ID:</strong>
            <div class="flex flex-grow border rounded overflow-hidden">
              <input type="text" value="nguyentuanudemy@gmail.com" readonly class="flex-grow px-2 py-1 bg-gray-50 text-gray-800 border-none focus:outline-none" />
              <button @click="copyToClipboard('nguyentuanudemy@gmail.com', 'id')" class="px-3 py-1 border-l text-sm bg-gray-200 hover:bg-gray-300 relative">
                <ClipboardCopy class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div class="flex items-center space-x-2 w-full">
            <strong>Password:</strong>
            <div class="flex flex-grow border rounded overflow-hidden">
              <input type="password" value="trang654321" readonly class="flex-grow px-2 py-1 bg-gray-50 text-gray-800 border-none focus:outline-none" />
              <button @click="copyToClipboard('trang654321', 'password')" class="px-3 py-1 border-l text-sm bg-gray-200 hover:bg-gray-300 relative">
                <ClipboardCopy class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
import { ClipboardCopy, BanknoteArrowUp } from 'lucide-vue-next';

export default {
  components: {
    ClipboardCopy,
    BanknoteArrowUp
  },
  methods: {
    copyToClipboard(text, type) {
      navigator.clipboard.writeText(text).then(() => {
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    },
  }
}
</script>