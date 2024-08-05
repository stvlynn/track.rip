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
      <!-- Rest of the template remains the same -->
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
      this.processUrlFromParams(this.$route.params.url)
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
      console.log(this.$route.params)
      console.log(url)
      try {
        const finalUrl = await processUrlBasedOnDomain(url)
        this.$router.push(`${window.location.origin}/result?url=${encodeURIComponent(finalUrl)}`)
      } catch (error) {
        // Error processing URL from params
        console.error(error)
        // If there's an error, we should still show the main page
        this.inputUrl = url
      }
    }
  }
}
</script>
