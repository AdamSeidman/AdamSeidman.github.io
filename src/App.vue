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

<!-- Fonts -->
<style>
@font-face {
    font-family: Varela;
    src: url('./assets/VarelaRound-Regular.ttf');
}

@font-face {
  font-family: IndieFlower;
  src: url('./assets/IndieFlower-Regular.ttf');
}
</style>
