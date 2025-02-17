import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import sideBar from '../components/layout/sideBar.vue'

const routes = [
  {
    path: '/',
    name: 'sideBar',
    component: sideBar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
