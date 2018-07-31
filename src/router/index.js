import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Home from '@/views/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/views/home/index',
      children: [
        {
          path: '/views/home/index',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
