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
</script>VarelaRound-Regular

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

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
</style>
