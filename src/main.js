import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

console.log('Application initialization started')

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

app.use(router)

router.isReady().then(() => {
  console.log('Router is ready, mounting app')
  app.mount('#app')
}).catch(error => {
  console.error('Router error:', error)
})

console.log('Application initialization completed')