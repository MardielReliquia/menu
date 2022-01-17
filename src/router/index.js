import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import MenuSides from '../views/MenuSide.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MenuSides
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "table" */ '../views/Table.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menuside" */ '../views/MenuSide.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
