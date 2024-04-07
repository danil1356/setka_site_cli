import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'loader',
    component: () => import('../views/Loader.vue')
  },

  {
    path: '/app',
    name: 'app',
    component: () => import('../App.vue'),
    children:[]
  },
  {
    path: '/',
    name:'home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/media',
    name:'media',
    component: ()=> import('../views/Media.vue')
  },
  {
    path: '/about',
    name:'about',
    component: ()=> import('../views/Onas.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
