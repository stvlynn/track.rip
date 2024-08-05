<template>
  <div class="flex flex-col items-center justify-center h-screen relative">
    <div class="absolute inset-0 bg-cover bg-center blur-[40%]"
      style="background-image: url('https://www.loliapi.com/acg/')"></div>
    <div
      class="bg-white/90 shadow-md hover:shadow-2xl transition-shadow rounded-[50px] p-8 w-full max-w-md relative z-10">
      <h1 class="text-4xl font-bold mb-8 text-center">去除追踪参数</h1>
      <div class="relative">
        <input v-model="inputUrl" type="text"
          class="border border-gray-300 rounded-[50px] px-4 py-3 w-full pr-12 text-center" placeholder="请输入链接" />
        <button @click="pasteUrl" class="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </button>
      </div>
      <div class="mt-4"></div>
      <button @click="processUrl"
        class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-[50px] w-full">
        处理
      </button>
      <div class="mt-8 space-y-2 text-center">
        <div class="flex items-center justify-center mb-2">
          <img src="../../public/xiaohongshu.png" class="w-[30px] h-[30px] rounded-full mr-2" />
          <span>小红书及其短链</span>
        </div>
        <div class="flex items-center justify-center mb-2">
          <img src="../../public/weixin.png" class="w-[30px] h-[30px] rounded-full mr-2" />
          <span>微信公众号</span>
        </div>
        <div class="flex items-center justify-center mb-2">
          <img src="../../public/NetEase.png" class="w-[30px] h-[30px] rounded-full mr-2" />
          <span>网易云音乐及其短链</span>
        </div>
        <div class="flex items-center justify-center mb-2">
          <img src="../../public/bilibili.png" class="w-[30px] h-[30px] rounded-full mr-2" />
          <span>B站及其短链</span>
        </div>
        <div class="flex items-center justify-center mb-2">
          <img src="../../public/zhihu.png" class="w-[30px] h-[30px] rounded-full mr-2" />
          <span>知乎</span>
        </div>
        <div class="border-t border-gray-300 pt-2">
          其他域名采用默认处理逻辑（清空第一个?后的查询参数）
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <iframe src="https://ghbtns.com/github-btn.html?user=stvlynn&repo=track.rip&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { processUrlBasedOnDomain } from '../utils/domain-specific-processors'

export default {
  name: 'MainPage',
  data() {
    return {
      inputUrl: ''
    }
  },
  mounted() {
    // Check if there's a URL in the route params
    if (this.$route.params.url) {
      this.inputUrl = this.$route.params.url
      if (this.inputUrl.includes(':/') && !this.inputUrl.includes('://')) {
        this.inputUrl = this.inputUrl.replace(':/', '://')
      }
      if (!this.inputUrl.startsWith('http://') && !this.inputUrl.startsWith('https://')) {
        this.inputUrl = 'http://' + this.inputUrl
      }
      this.processUrlFromParams(this.inputUrl)
    }
  },
  methods: {
    async processUrl() {
      if (!this.inputUrl) {
        // No valid link found
        return
      }

      try {
        const finalUrl = await processUrlBasedOnDomain(this.inputUrl)
        window.location.href = `${window.location.origin}/result?url=${encodeURIComponent(finalUrl)}`
      } catch (error) {
        // Error processing URL
        console.error(error)
      }
    },
    async processUrlFromParams(url) {
      try {
        // 手动添加一个斜杠,将URL恢复为正确的形式
        if (url.startsWith('/http')) {
          url = 'http' + url;
        }
        const finalUrl = await processUrlBasedOnDomain(url)
        this.$router.push(`/result?url=${encodeURIComponent(finalUrl)}`)
      } catch (error) {
        // Error processing URL from params
        console.error(error)
        // If there's an error, we should still show the main page
        this.inputUrl = url
      }
    },
    pasteUrl() {
      // 在这里实现粘贴功能
      navigator.clipboard.readText().then(text => {
        this.inputUrl = text;
      });
    }
  }
}
</script>