<template>
  <section class="flex flex-col items-start gap-x-1.5 gap-y-1.5">
    <h1 class="font-bold text-2xl mb-8 tracking-tighter">
      <Transition name="fade" mode="out-in">
        <span 
          :key="currentGreeting.text" 
          class="cursor-help relative group"
        >
          {{ currentGreeting.text }}
          <span class="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {{ currentGreeting.language }}
          </span>
        </span>
      </Transition>
      👋
    </h1>
    <p>Hello, I'm Tuan Nguyen.</p>
    <p>
      I'm a web developer specializing in building user-friendly and accessible
      products. I especially enjoy working in small, collaborative teams to
      solve complex business challenges.
    </p>
    <p>
      Feel free to reach out to me via email at:
      <NuxtLink
        to="mailto:nguyentuan1696@gmail.com"
        class="hover:underline hover:duration-300 cursor-pointer"
        >nguyentuan1696@gmail.com</NuxtLink
      >
    </p>
    <p>Don't hesitate, let's connect!</p>
  </section>
</template>

<script setup>
const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Xin chào', language: 'Vietnamese' },
  { text: 'こんにちは', language: 'Japanese' },
  { text: '안녕하세요', language: 'Korean' },
  { text: 'Bonjour', language: 'French' },
  { text: 'Hola', language: 'Spanish' },
  { text: '你好', language: 'Chinese' },
  { text: 'Hallo', language: 'German' },
  { text: 'Ciao', language: 'Italian' },
  { text: 'Olá', language: 'Portuguese' },
  { text: 'Привет', language: 'Russian' },
  { text: 'สวัสดี', language: 'Thai' },
  { text: 'Namaste', language: 'Hindi' },
  { text: 'Merhaba', language: 'Turkish' },
  { text: 'Salam', language: 'Arabic' },
  { text: 'Sawubona', language: 'Zulu' },
  { text: 'Jambo', language: 'Swahili' },
  { text: 'Γεια σας', language: 'Greek' },
  { text: 'Shalom', language: 'Hebrew' },
  { text: 'Kumusta', language: 'Filipino' },
  { text: 'Xin chào bạn', language: 'Vietnamese (friendly)' },
  { text: 'Chào nhé', language: 'Vietnamese (casual)' },
  { text: 'G\'day', language: 'Australian English' },
  { text: 'Aloha', language: 'Hawaiian' },
  { text: 'Zdravo', language: 'Serbian/Croatian' },
  { text: 'Dia dhuit', language: 'Irish' },
  { text: 'Tere', language: 'Estonian' },
  { text: 'Bongu', language: 'Maltese' },
  { text: 'Bună ziua', language: 'Romanian' },
  { text: 'Dobrý den', language: 'Czech' },
  { text: 'Dzień dobry', language: 'Polish' },
  { text: 'Góðan dag', language: 'Icelandic' },
  { text: 'Selamat pagi', language: 'Indonesian' },
  { text: 'Sveiki', language: 'Latvian' },
  { text: 'Labas', language: 'Lithuanian' },
  { text: 'Moïen', language: 'Luxembourgish' },
  { text: 'Hallå', language: 'Swedish' },
  { text: 'Hei', language: 'Finnish' },
  { text: 'Xin chào các bạn', language: 'Vietnamese (plural)' },
  { text: 'Chào mừng', language: 'Vietnamese (welcome)' }
];

const currentGreeting = computed(() => {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
