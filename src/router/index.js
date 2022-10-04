import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/navBar',
    name: 'navBar',
    component: () => import( '../Layout/NavBar.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import( '../components/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/DashComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
