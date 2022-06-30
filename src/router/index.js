import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/pages/firstPage'
import inHouse from '@/pages/in'
import outHouse from '@/pages/out'
import system from '@/pages/system'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/in',
      name: 'inHouse',
      component: inHouse
    },
    {
      path: '/out',
      name: 'outHouse',
      component: outHouse
    },
    {
      path: '/system',
      name: 'system',
      component: system
    },
  ]
})
