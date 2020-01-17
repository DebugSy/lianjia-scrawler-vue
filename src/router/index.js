import Vue from 'vue'
import Router from 'vue-router'
import Main from "../components/Main";
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from "../components/HelloWorld2";
import HousePrice from "../components/HousePrice";
import Community from "../components/Community"
import Community2 from "../components/Community2"
import Test from "../components/Test"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/housePrice',
      name: 'housePrice',
      component: HousePrice
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/community2',
      name: 'community2',
      component: Community2
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
