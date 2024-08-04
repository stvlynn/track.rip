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

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  // If the path starts with http:// or https://
  if (to.path.startsWith('/http://') || to.path.startsWith('/https://')) {
    // Pass the entire path as a URL parameter to the ProcessUrl route
    next({
      name: 'ProcessUrl',
      params: { url: to.path.slice(1) },  // Remove the leading '/'
      replace: true
    })
  } else {
    next()
  }
})

export default router