import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import brandDetial from './views/brandDetial.vue'

import detail from './views/detail.vue'
import submit from './components/submit.vue'
import table from './views/table.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true, // 此组件需要被缓存
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        keepAlive: true, // 此组件需要被缓存
      }
    },
    {
      path: '/brand',
      name: 'brand',
      component: brandDetial,
      meta: {
        keepAlive: true, // 此组件需要被缓存
      }
    }, 
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/submit',
      name: 'submit',
      component: submit
    }
  ]
})
