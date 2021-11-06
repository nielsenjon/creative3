import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dungeons from '../views/Dungeons.vue'
import Items from '../views/Items.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dungeons',
    name: 'Dungeons',
    component: Dungeons
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
