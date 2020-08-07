<template>
  <div id="app" :class="{ landscape: this.isLandscape, portrait: !this.isLandscape }">
    <media-bar></media-bar>
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import MediaBar from './components/MediaBar'
import NavBar from './components/NavBar'

var body = document.body
var html = document.documentElement

export default {
  name: 'app',
  data () {
    return {
      isLandscape: true
    }
  },
  components: {
    MediaBar,
    NavBar
  },
  created() {
    this.updateSizing()
    window.addEventListener("resize", this.updateSizing);
    this.$forceUpdate()
  },
  destroyed() {
    window.removeEventListener("resize", this.updateSizing);
  },
  methods: {
      updateSizing: function () {
        let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
        this.isLandscape = width > height
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

