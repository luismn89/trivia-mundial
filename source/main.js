import 'es6-promise/auto'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import { routes } from './router/router'
import { store } from './store/store'
import App from './pages/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/mundial/trivia',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
