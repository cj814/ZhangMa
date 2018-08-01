import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Home from '@/views/home/index'
import Weather from '@/views/weather/index'
import Intro from '@/views/intro/index'
import Person from '@/views/person/index'

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
        },
        {
          path: '/views/weather/index',
          name: 'Weather',
          component: Weather
        },
        {
          path: '/views/intro/index',
          name: 'Intro',
          component: Intro
        },
        {
          path: '/views/person/index',
          name: 'Person',
          component: Person
        }
      ]
    }
  ]
})
