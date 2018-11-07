import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import manage from '@/pages/manage'
import home from '@/pages/home'
import addShop from '@/pages/addShop'
import userList from '@/pages/userList'
import shopList from '@/pages/shopList'
import orderList from '@/pages/orderList'
import foodList from '@/pages/foodList'

Vue.use(Router)
Vue.use(login)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path:'/manage',
      name:'manage',
      component:manage,
      children: [{
        path: '',
        component: home,
        meta: [],
      },{
        path: '/addShop',
        component: addShop,
        meta: ['添加数据', '添加商铺'],
      },{
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表'],
      },{
        path: '/shopList',
        component: shopList,
        meta: ['数据管理', '店铺列表'],
      },{
        path: '/orderList',
        component: orderList,
        meta: ['数据管理', '订单列表'],
      },{
        path: '/foodList',
        component: foodList,
        meta: ['数据管理', '食品列表'],
      }]
    }
  ]
})
