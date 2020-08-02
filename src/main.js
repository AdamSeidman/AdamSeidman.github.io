import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import HomePage from './views/HomePage'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/bro', component: HomePage }
    ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
