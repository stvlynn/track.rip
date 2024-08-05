<template>
  <div class="flex flex-col items-center justify-center h-screen relative">
    <div class="absolute inset-0 bg-cover bg-center blur-[40%]" style="background-image: url('https://www.loliapi.com/acg/')"></div>
    <div class="bg-white/90 shadow-md hover:shadow-2xl transition-shadow rounded-[50px] p-8 w-full max-w-md relative z-10">
      <div class="flex items-center mb-8">
        <a href="/" class="mr-4 text-blue-500 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
        <h1 class="text-4xl font-bold">处理结果</h1>
      </div>
      <div class="mb-4 text-center">
        <a :href="finalUrl" target="_blank" class="text-blue-500 hover:underline">{{ finalUrl }}</a>
      </div>
      <button
        @click="copyUrl"
        class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-6 rounded-[50px] w-full"
      >
        复制链接
      </button>
      <div class="flex justify-center mt-8">
        <iframe src="https://ghbtns.com/github-btn.html?user=stvlynn&repo=track.rip&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
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
    this.finalUrl = decodeURIComponent(this.$route.query.url || '')
  },
  methods: {
    copyUrl() {
      navigator.clipboard.writeText(this.finalUrl)
      alert('链接已复制到剪贴板')
    }
  }
}
</script>