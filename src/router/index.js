//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory,createWebHistory} from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route
import Index from '../views/static/index.vue'
import User from '../views/static/user.vue'
import Info from '@/views/static/info.vue'
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
const routes = [
    { path: '/', name:'home',components:{
      default:Index,
      Footer,//命名视图
      Header
    }
   },
 
    { path: '/index',redirect:'/'},
    { path: '/user',name:'user', component: User,
    meta:{
      title:'user页面',
      Auth:true 
    },
    children:[
      {
        path:'info',
        component:Info
      }
  ]
},
    { path: '/user/:id(\\d+)+',name:'userId', component: User,props:true, },
    { path: '/adCate',name:'adCate', component:()=>import('../views/static/adCate.vue') //懒加载 
  },
    { path: '/login',name:'login', component:()=>import('../views/static/login.vue') //懒加载 
  },
    { path: '/object',name:'object', component:()=>import('../views/static/object.vue'),//懒加载
    children:[
      {
        path:'',
        name:'objectinfo',//嵌套命名路由
        component:Info
      },
      {
        path:'login',
        component:import('@//views/static/login.vue')
      },
  ]  
  },
    { path: '/shops',name:'shops', component:()=>import('../views/static/shop.vue') //懒加载 
  },
  { path: '/map',name:'map', component:()=>import('../views/static/map.vue') //懒加载 
},
  { path: '/classinfo',name:'classinfo', component:()=>import('../views/static/classinfo.vue') //懒加载 
},
    { path: '/cart',name:'cart', component:()=>import('../views/static/cart.vue') //懒加载 
    },

    {
      path:'/admin',
      name:'admin',
      component:LayoutAdmin,
      children:[
        {
          path:'',
          name:'admin-index',
          component:()=>import('@/views/admin/map.vue')
        },
        {
          path:'map',
          name:'admin-map',
          component:()=>import('@/views/admin/map.vue')
        },
        {
          path:'teacher',
          name:'admin-teacher',
          component:()=>import('@/views/admin/teacher.vue')
        },
        {
          path:'department',
          name:'admin-department',
          component:()=>import('@/views/admin/department.vue')
        },
        {
          path:'school',
          name:'school',
          component:()=>import('@/views/admin/school.vue')
        },
      ]
    },

    { path:'/:pathMatch(.*)*',name:'404', component:()=>import('../views/404.vue') //懒加载 
  }
 ]
 //创建路由管理 router
 const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
   history: createWebHistory(),
   routes,})
   router.beforeEach((to,from,next)=>{
    //前置路由
    // if(to.name!=='cart'){
    //   next({name:'cart'})
    // }else{
    //   next();
    // }
    next();
   })
  //导出路由
 export default router  