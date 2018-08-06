import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Login from '@/views/user/login'
import Home from '@/views/home/index'
import Weather from '@/views/weather/index'
import Intro from '@/views/intro/index'
import Person from '@/views/person/index'
import Syyd from '@/views/home/syyd/index'
import Nfcp from '@/views/home/nfcp/index'
import Ybyj from '@/views/home/ybyj/index'
import Tsms from '@/views/home/tsms/index'
import phoList from '@/views/home/phoList/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/views/user/login',
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
    },
    {
      path: '/views/user/login', // 登录
      name: 'Login',
      component: Login
    },
    {
      path: '/views/home/syyd/index', // 四园一岛
      name: 'Syyd',
      component: Syyd
    },
    {
      path: '/views/home/nfcp/index', // 农副产品
      name: 'Nfcp',
      component: Nfcp
    },
    {
      path: '/views/home/ybyj/index', // 一步一景
      name: 'Ybyj',
      component: Ybyj
    },
    {
      path: '/views/home/tsms/index', // 特色民宿
      name: 'Tsms',
      component: Tsms
    },
    {
      path: '/views/home/phoList/index', // 风景图片列表
      name: 'phoList',
      component: phoList
    }
  ]
})
