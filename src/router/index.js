import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    children:[
      {
        path: '',
        name: 'appHeader',
        component: () => import('../views/AppHeader'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
