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

// 添加一个全局的导航守卫
router.beforeEach((to, from, next) => {
  // 如果路径以 http:// 或 https:// 开头
  if (to.path.startsWith('/http://') || to.path.startsWith('/https://')) {
    // 将整个路径作为 URL 参数传递给 ProcessUrl 路由
    next({
      name: 'ProcessUrl',
      params: { url: to.path.slice(1) },  // 移除开头的 '/'
      replace: true
    })
  } else {
    next()
  }
})

export default router