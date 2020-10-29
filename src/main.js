// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import denglu from './components/denglu.vue'
import { Button, Select } from 'element-ui'
import dajiangshan from './components/dajiangshan.vue'
import guiwang from './components/guiwang.vue'
import haiguo from './components/haiguo.vue'
import xieshen from './components/xieshen.vue'
import linghu from './components/linghu.vue'
import home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import yuanhuabizi from './components/yuanhuabizi.vue'
import shipingzhongxin from './components/shipingzhongxin.vue'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {path: '/',
  name:'home',
   component: home},
  {path: '/denglu', component: denglu},
  {path: '/yuanhuabizi', component: yuanhuabizi},
  {path: '/shipingzhongxin', component: shipingzhongxin},
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
