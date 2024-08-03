<template>
    <div class="flex flex-col items-center justify-center h-screen relative">
      <div class="absolute inset-0 bg-cover bg-center blur-[40%]" style="background-image: url('https://www.loliapi.com/acg/')"></div>
      <div class="bg-white/90 shadow-md hover:shadow-2xl transition-shadow rounded-[50px] p-8 w-full max-w-md relative z-10">
        <h1 class="text-4xl font-bold mb-8 text-center">处理结果</h1>
        <div class="mb-4 text-center">
          <a :href="finalUrl" target="_blank" class="text-blue-500 hover:underline">{{ finalUrl }}</a>
        </div>
        <button
          @click="copyUrl"
          class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-[50px] w-full"
        >
          复制链接
        </button>
        <div class="mt-8 space-y-2 text-center">
          <p>小红书及其短链</p>
          <p>微信公众号</p>
          <p>网易云音乐及其短链</p>
          <p>B站及其短链</p>
          <p>知乎</p>
          <p>其他域名采用默认处理逻辑（清空第一个?后的查询参数）</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultPage',
    data() {
      return {
        finalUrl: ''
      }
    },
    created() {
      this.finalUrl = this.$route.query.url || ''
    },
    methods: {
      copyUrl() {
        navigator.clipboard.writeText(this.finalUrl)
        alert('链接已复制到剪贴板')
      }
    }
  }
  </script>