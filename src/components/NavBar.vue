<template>
  <div class="navbar-container">
      <nav class="nav">
          <a class="nav-link">HOME</a>
          <a class="nav-link">ABOUT</a>
          <a class="nav-link">PROJECTS</a>
          <a class="nav-link">RESUME</a>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.navbar-container {
    position: absolute;
    text-align: center;
    width: 100vw;
    margin-top: 2vh;
}

a.nav-link {
    text-decoration: none;
    color: #cccccc;
    margin-left: 1vw;
    margin-right: 1vw;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: color 0.175s ease-in;
}

a.nav-link:hover {
    color: white;
    cursor: pointer;
    transition: color 0.25s ease-out;
}
</style>