import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/HomePage',
    name:'homepage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path:'/',
    name:'UserBoard',
    component: () => import('../views/UserBoard.vue'),
    children:[
      {
        path:'',
        name:'homepage2',
        component: () => import('../views/HomePage2.vue')
      },
      {
        path:'UserCart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path:'UserProduct/:productid',
        component: () => import('../views/UserProduct.vue')
      },
      {
        path:'UserCartList',
        component: () => import('../views/UserCartList.vue')
      },
      {
        path:'JoinCourse',
        component: () => import('../views/JoinCourse.vue')
      },
      {
        path:'AboutUs',
        component: () => import('../views/AboutUs.vue')
      },
      {
        path:'SendOrder',
        component: () => import('../views/SendOrder.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../views/LogIn.vue'),
  },
  {
    path:'/DashBorder',
    name:'DashBorder',
    component: () => import('../views/DashBorder.vue'),
    children:[
      {
        path:'Product',
        component: () => import('../views/ProductList.vue')
      },
      {
        path:'Order',
        component: () => import('../views/OrderList.vue')
      },
      {
        path:'Coupon',
        component: () => import('../views/CouponsList')
      }
    ]
  },
  {
    path:'/AcompPage',
    name:'acomppage',
    component: () => import('../views/AcompPage.vue'),
    children:[
      {
        path:'AcompPage2',
        components:{
          left:() => import('../views/AcompPage1.vue'),
          right:() => import('../views/AcompPage2.vue')
        } 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
