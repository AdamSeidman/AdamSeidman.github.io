<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  data () {
    return {}
  }, components: {
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
</style>
