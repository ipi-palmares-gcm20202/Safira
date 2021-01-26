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
  routes
})

export default router
