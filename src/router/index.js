import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import inHouse from '@/components/in'
import outHouse from '@/components/out'
import system from '@/components/system'

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
