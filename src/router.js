import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let route = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: { title: '', keepAlive: true },
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      meta: { title: '', keepAlive: true },
      component: () => import('@/views/home/index.vue'),
    },
  ],
})



export default route
