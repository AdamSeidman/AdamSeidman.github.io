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

export default {
  name: 'app',
  components: {
    MediaBar,
    NavBar
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
}
</style>

