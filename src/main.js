import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Switches from 'vue-switches'
import App from './App.vue'
import HomePage from './views/HomePage'
import NotFound from './views/NotFound'
import MyProjects from './views/MyProjects'
import BajaGame from './views/BajaGame'
import GamesNight from './views/GamesNight'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCog, faInfinity, faCalendar, faShare } from '@fortawesome/free-solid-svg-icons'

Vue.use(VueRouter)
Vue.use(VueCookies, { expire: '9999d' })
Vue.use(Switches)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faGithub)
library.add(faLinkedin)
library.add(faEnvelope)
library.add(faCog)
library.add(faInfinity)
library.add(faCalendar)
library.add(faShare)

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
      name: 'projects',
      path: '/projects',
      component: MyProjects
    },
    {
      name: 'bajadle',
      path: '/bajadle',
      component: BajaGame,
      props: {daily: true}
    },
    {
      name: 'gamesnightle',
      path: '/gamesnightle',
      component: GamesNight,
      props: {daily: true}
    },
    {
      name: 'gamesnightle-infinite',
      path: '/gamesnightle-infinite',
      component: GamesNight,
      props: {daily: false}
    },
    {
      name: 'bajadle-infinite',
      path: '/bajadle-infinite',
      component: BajaGame,
      props: {daily: false}
    },
    {
      name: 'game',
      path: '/game',
      component: GamesNight,
      props: {daily: true}
    },
    {
      name: 'game-infinite',
      path: '/game-infinite',
      component: GamesNight,
      props: {daily: false}
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
