<template>
  <div class="home-container">
    <div>
        <h1><span class="invisible">Adam Seidman</span></h1>
        <h2><span class="invisible">Developer.&nbsp;&nbsp;</span>
        <span class="invisible">Engineer.&nbsp;&nbsp;</span>
        <span class="invisible">Maker.</span></h2>
    </div>
  </div>
</template>

<script>
const REDIRECT_PATHS = ['about', 'projects']

export default {
  mounted () {
    if (this.$route.query.pathname === undefined || 
      !REDIRECT_PATHS.includes(this.$route.query.pathname)) {

      setTimeout(() => {
        let invisibleEls = document.getElementsByClassName('invisible')
        for (let i = 0; i < invisibleEls.length; i++) {
            setTimeout(() => {
                invisibleEls[i].classList.add('appear')
            },  (i * 1200))
        }
      }, 500)
    } else {
      this.$router.push({ name: this.$route.query.pathname })
    }
  }
}
</script>

<style scoped>
div.home-container {
    background-image: url('../assets/background.jpg');
    background-size: cover;
    height: 100vh;
    text-align: center;
}

h1, h2 {
  margin: auto;
  color: white;
  text-shadow: -1px -1px 3px black,
    -1px 1px 3px black,
    1px -1px 3px black,
    1px 1px 3px black;
  cursor: default;
}

h2 {
  font-family: 'Indie Flower', 'Franklin Gothic Medium', Arial, sans-serif;
  padding-top: 1vh;
  font-size: 7.75vh;
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-top: 38vh;
  font-size: 13vh;
}

.appear {
  transition: opacity 2s;
}
</style>