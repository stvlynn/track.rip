<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import router from './router'

export default {
  name: 'App',
  setup() {
    return { router }
  }
}
</script>