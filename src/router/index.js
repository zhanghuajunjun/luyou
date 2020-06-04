import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/Parent/Parent'),
    children: [
      {
        path: 'childone',
        name: 'Childone',
        component: () => import('../views/childone/Childone'),
      },
      {
        path: 'childtwo',
        name: 'Childtwo',
        component: () => import('../views/childtwo/Childtwo'),
      }
    ]

  },
  {
    path: '*',
    component: () => import('../views/err/Err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
