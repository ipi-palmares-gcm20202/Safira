import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login'
import Cadastro from '../components/Cadastro'
import Posts from '../components/Posts'
import RecuperacaoSenha from '../components/RecuperacaoSenha'
import Categoria from '../components/Categoria'
import NovoPost from '../components/NovoPost'


const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/login',name: 'login',component: Login },
  { path: '/cadastro',name: 'cadastro',component: Cadastro},
  { path: '/posts',name: 'posts',component: Posts},
  { path: '/recuperacao-senha',name: 'recuperacao-senha',component: RecuperacaoSenha },
  { path: '/categoria',name: 'categoria',component: Categoria },
  { path: '/novo-post',name: 'novo-post',component: NovoPost },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
