import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: () => import('@/views/Home')
  },
  {
    path: '/skills',
    name: 'SKILLS',
    component: () => import('@/views/Skills')
  },
  {
    path: '/works',
    name: 'WORKS',
    component: () => import('@/views/Works')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
