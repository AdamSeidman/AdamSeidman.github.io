import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage'
import NotFound from './views/NotFound'
import MyProjects from './views/MyProjects'
import AboutMe from './views/AboutMe'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage
    },
    {
      name: 'index',
      path: '/index',
      component: HomePage
    },
    {
      name: 'about',
      path: '/about',
      component: AboutMe
    },
    {
      name: 'projects',
      path: '/projects',
      component: MyProjects
    },
    {
      name: '404',
      path: '*',
      component: NotFound
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
