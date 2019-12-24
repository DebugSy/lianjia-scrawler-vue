import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from "../components/HelloWorld2";
import HousePrice from "../components/HousePrice";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
