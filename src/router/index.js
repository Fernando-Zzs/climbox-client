import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },
    {
      path: '/Register',
      component: resolve => require(['../pages/Register.vue'], resolve)
    },
    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children:[
        {
          path: '/Info',
          component: resolve => require(['../pages/Infopage.vue'], resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../pages/ConsumerPage.vue'], resolve)
        },
        {
          path: '/Singer',
          component: resolve => require(['../pages/SingerPage.vue'], resolve)
        },
        {
          path: '/SongList',
          component: resolve => require(['../pages/SongListPage.vue'], resolve)
        },
       
      ]
    },
    

  ]
})
