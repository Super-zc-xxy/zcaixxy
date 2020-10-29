import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import denglu from '@/components/denglu'
import yuanhuabizi from '@/components/yuanhuabizi'
import shipingzhongxin from '@/components/shipingzhongxin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/denglu',
      component: denglu,
      name: 'denglu'
    },
    {
      path: '/yuanhuabizi',
      component: yuanhuabizi,
      name: 'yuanhuabizi'
    },
    {
      path: '/shipingzhongxin',
      component: shipingzhongxin,
      name: 'shipingzhongxin'
    } 
  ]
})
