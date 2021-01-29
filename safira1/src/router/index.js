import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login'
import Cadastro from '../components/Cadastro'
import Posts from '../components/Posts'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login',name: 'login',component: Login },
  { path: '/cadastro',name: 'cadastro',component: Cadastro},
  { path: '/posts',name: 'posts',component: Posts},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
