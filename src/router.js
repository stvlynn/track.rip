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
    path: '/track',
    name: 'TrackRedirect',
    beforeEnter: (to, from, next) => {
      const finalUrl = to.query.url || ''
      next({ name: 'MainPage', query: { url: finalUrl }})
    }
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router