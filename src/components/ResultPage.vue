<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">URL 已去除追踪</h2>
        <p class="mb-4 break-all">{{ processedUrl }}</p>
        <button
          @click="copyToClipboard"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          复制到剪贴板
        </button>
        <p v-if="isCopied" class="text-green-500 mt-2 text-center">已复制到剪贴板!</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ResultPage',
  data() {
    return {
      processedUrl: '',
      isCopied: false
    }
  },
  mounted() {
    this.processedUrl = this.$route.query.url
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.processedUrl)
      this.isCopied = true
      setTimeout(() => {
        this.isCopied = false
      }, 2000)
    }
  }
}
</script>