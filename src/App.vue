<template>
  <div id="app">
    <nav-bar></nav-bar>
    <media-bar></media-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MediaBar from './components/MediaBar'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  data () {
    return {}
  }, components: {
    MediaBar,
    NavBar
  }
}
</script>

<style lang="scss">
.invisible {
  opacity: 0.0;
}

.appear {
  opacity: 1.0 !important;
  transition: opacity 2s;
}

body {
  margin: 0px;
}

.pointable:hover {
  cursor: pointer;
}
</style>
