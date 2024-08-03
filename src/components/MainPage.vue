<template>
    <div class="flex flex-col items-center justify-center h-screen relative">
      <div class="absolute inset-0 bg-cover bg-center blur-[40%]" style="background-image: url('https://www.loliapi.com/acg/')"></div>
      <div class="bg-white/90 shadow-md hover:shadow-2xl transition-shadow rounded-[50px] p-8 w-full max-w-md relative z-10">
        <h1 class="text-4xl font-bold mb-8 text-center">去除追踪参数</h1>
        <input
          v-model="inputUrl"
          type="text"
          class="border border-gray-300 rounded-[50px] px-4 py-3 w-full mb-4 text-center"
          placeholder="请输入链接"
        />
        <button
          @click="processUrl"
          class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-[50px] w-full"
        >
          处理
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
  import { extractUrlFromText, resolveShortUrl } from '../utils/url-utils'
  import { processUrlBasedOnDomain } from '../utils/domain-specific-processors'
  
  export default {
    name: 'MainPage',
    data() {
      return {
        inputUrl: ''
      }
    },
    methods: {
      async processUrl() {
        let extractedUrl = this.$route.query.url || this.inputUrl
        if (!extractedUrl) {
          // 未找到有效链接
          return
        }
  
        try {
          const finalUrl = await processUrlBasedOnDomain(extractedUrl)
          this.$router.push({ name: 'ResultPage', query: { url: finalUrl }})
        } catch (error) {
          // 处理 URL 时出错
          console.error(error)
        }
      }
    }
  }
  </script>