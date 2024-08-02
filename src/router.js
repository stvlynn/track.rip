import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import ResultPage from '@/components/ResultPage.vue'

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
    path: '/track.rip/:domain/:url*',
    name: 'TrackRedirect',
    beforeEnter: (to, from, next) => {
      const domain = to.params.domain || ''
      const finalUrl = to.params.url || ''
      next({ name: 'MainPage', query: { domain, url: finalUrl }})
    }
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