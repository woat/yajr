import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sample from '@/components/Sample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/start',
      redirect: '/sample'
    }
  ]
})
