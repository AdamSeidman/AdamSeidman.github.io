<template>
  <div id="app">
    <media-bar></media-bar>
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import MediaBar from './components/MediaBar'
import NavBar from './components/NavBar'

const DEBUG = false

export default {
  name: 'app',
  components: {
    MediaBar,
    NavBar
  },
  created () {
    window.addEventListener("resize", this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      let el = document.getElementById('app')
      el.className = ''
      el.classList.add(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || DEBUG ? 'mobile' : 'pc')
      el.classList.add(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

.invisible {
  opacity: 0.0;
}

.appear {
  opacity: 1.0 !important;
}

body {
  margin: 0px;
  overflow-x: hidden;
}
</style>

