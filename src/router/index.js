import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
// import rez from './rez.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/',
      component: () => import ('../views/main.vue'),
      meta: {
        announcer: 'main page'
      }
    },
    {
      name: 'rez',
      path: '/rez/',
      component: () =>import('../views/rez.vue'),
      meta: {
        announcer: 'rez page'
      }
    }
  ]
})

export default router