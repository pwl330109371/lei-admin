import { createRouter, createWebHashHistory } from 'vue-router'

const publicRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouter
})

export default router
