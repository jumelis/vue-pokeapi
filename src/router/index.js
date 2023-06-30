import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/FirstGen',
      name: 'FirstGen',
      component: () => import('../components/First gen.vue')
    },
    {
      path: '/SecondGen',
      name: 'SecondGen',
      component: () => import('../components/Second gen.vue')
    },
    {
      path: '/ThirdGen',
      name: 'ThirdGen',
      component: () => import('../components/Third gen.vue')
    },
    {
      path: '/FourthGen',
      name: 'FourthGen',
      component: () => import('../components/fourth gen.vue')
    },
    {
      path: '/FifthGen',
      name: 'FifthGen',
      component: () => import('../components/Fifth gen.vue')
    },
    {
      path: '/SixthGen',
      name: 'SixthGen',
      component: () => import('../components/Sixth gen.vue')
    },
    {
      path: '/SeventhGen',
      name: 'SeventhGen',
      component: () => import('../components/Seventh gen.vue')
    },
    {
      path: '/EightGen',
      name: 'EightGen',
      component: () => import('../components/Eighth generation.vue')
    },
    {
      path: '/NinthGen',
      name: 'NinthGen',
      component: () => import('../components/Ninth generation.vue')
    },
  ]
})

export default router
