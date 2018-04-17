import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Plan from '@/views/Plan'
import Sj from '@/views/Sj'
import Seting from '@/views/Seting'
import Login from '@/views/Login'
import store from '../store/store'
import Creat from '@/views/Creat'
import CreatCho from '@/views/Creat/children/CreatCho'
import CreatCy from '@/views/Creat/children/CreatCy'
import CreatSc from '@/views/Creat/children/CreatSc'
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/sj',
      name: 'Sj',
      component: Sj
    },
    {
      path: '/seting',
      name: 'Seting',
      component: Seting
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/creat',
      name: 'Creat',
      component: Creat,
      children:[{
        path:'index',
        component:CreatCho
      },{
        path:'indexs',
        component:CreatCy
      },,{
        path:'indexc',
        component:CreatSc
      }]
    }

  ]
})
router.beforeEach((to,from,next)=>{
  let isLogin = checkLoginStatus();
  if(to.name=='Login'){
    next()
  }else{
    if(!isLogin){
      next('/login')
    }else{
      next()
    }
  }
})
function checkLoginStatus(){
  let tk=localStorage.getItem('token');
  if(tk){
    store.commit('saveUser',localStorage.getItem('username'))
  }
  return !!tk
}
export default router