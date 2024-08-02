<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-8">去除追踪参数</h1>
      <div class="w-full max-w-md">
        <input
          v-model="inputUrl"
          type="text"
          class="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
          placeholder="请输入链接"
        />
        <button
          @click="processUrl"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          处理
        </button>
      </div>
      <div class="mt-8 space-y-2">
        <p>小红书及其短链</p>
        <p>微信公众号</p>
        <p>网易云音乐及其短链</p>
        <p>B站及其短链</p>
        <p>知乎</p>
        <p>其他域名采用默认处理逻辑（清空第一个?后的查询参数）</p>
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
        let domain = this.$route.query.domain || ''
        let extractedUrl = this.$route.query.url || this.inputUrl
        if (!extractedUrl) {
          // 未找到有效链接
          return
        }
  
        try {
          const finalUrl = await processUrlBasedOnDomain(domain, extractedUrl)
          this.$router.push({ name: 'ResultPage', query: { url: finalUrl }})
        } catch (error) {
          // 处理 URL 时出错
          console.error(error)
        }
      }
    }
  }
  </script>