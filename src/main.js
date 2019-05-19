import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'

import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.prototype.qs = QS

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {    
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
})
// Vue.use(axios)  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
