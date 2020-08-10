import Vue from 'vue'
import Router from 'vue-router'
import MainStage from '@/components/MainStage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: MainStage
    }
  ]
})
