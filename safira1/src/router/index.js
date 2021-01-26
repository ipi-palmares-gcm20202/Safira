import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login'

const routes = [
  {
    path: '/',name: 'login',component: Login
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
