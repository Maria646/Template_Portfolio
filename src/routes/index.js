import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: Acceuil
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
