import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/index.vue'
import myMusic from '@/views/my-music.vue'
import findMusic from '@/views/find-music.vue'
import Community from '@/views/community.vue'
import Search from '@/views/search.vue'
import Login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    children: [{
      path: '/my-music',
      name: 'my-music',
      component: myMusic
    }, {
      path: '/find-music',
      name: 'find-music',
      component: findMusic
    }, {
      path: '/community',
      name: 'community',
      component: Community
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
