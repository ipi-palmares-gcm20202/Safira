<<<<<<< HEAD
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
=======
import { createRouter, createWebHashHistory } from 'vue-router'
import PaginaInicial from '../components/PaginaInicial'
import Login from '../components/Login'
import Cadastro from '../components/Cadastro'

const routes = [
 
  { path: '/',name: 'paginainicial',component: PaginaInicial },
  { path: '/login',name: 'login',component: Login },
  { path: '/cadastro',name: 'cadastro',component: Cadastro,},

]

const router = createRouter({
  history: createWebHashHistory(),
>>>>>>> 09f4386b26157ba05a0d7e53f099695290fc248e
  routes
})

export default router
