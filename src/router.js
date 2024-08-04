import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import ResultPage from './components/ResultPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage
  },
  {
    path: '/:url(.*)',
    name: 'ProcessUrl',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router