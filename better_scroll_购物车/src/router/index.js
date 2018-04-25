import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Hq from '@/views/Hq'
import Find from '@/views/Find'
import Doller from '@/views/Doller'
import Danger from '@/views/Danger'
import We from '@/views/We'
import Detail from '@/views/Detail'
import Sp from '@/views/Detail/Sp'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'home',
    },
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    {
      path: '/hq',
      name: 'Hq',
      component: Hq
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/we',
      name: 'We',
      component: We
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      redirect:'/detail/:id/sp',
      component: Detail,
      children:[
        {
          path: 'sp',
          name: 'Sp',
          component: ()=>import('@/views/Detail/Sp')
        },
        {
          path: 'pj',
          name: 'Pj',
          component: ()=>import('@/views/Detail/Pj')
        },
        {
          path: 'dp',
          name: 'Dp',
          component: ()=>import('@/views/Detail/Dp')
        }
      ]
    }
  ]
})
