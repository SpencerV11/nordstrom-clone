import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Swag from './Swag.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/swag', component: Swag }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
