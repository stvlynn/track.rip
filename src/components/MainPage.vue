<template>
  <!-- Template remains the same -->
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
  created() {
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
      try {
        const finalUrl = await processUrlBasedOnDomain(url)
        window.location.href = `${window.location.origin}/result?url=${encodeURIComponent(finalUrl)}`
      } catch (error) {
        // Error processing URL from params
        console.error(error)
      }
    }
  }
}
</script>