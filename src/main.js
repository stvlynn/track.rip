import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

console.log('Vue version:', Vue.version)
console.log('Current route:', router.currentRoute.value)

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
}).catch(error => {
  console.error('Router error:', error)
})