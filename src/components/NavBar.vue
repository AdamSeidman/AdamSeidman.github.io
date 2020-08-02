<template>
    <div class="navbar-container">
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/projects">PROJECTS</router-link>
        <router-link to="">RESUME</router-link>
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

a {
    text-decoration: none;
    color: #cccccc;
    margin-left: 1vw;
    margin-right: 1vw;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: color 0.175s ease-in;
}

a:hover {
    color: white;
    cursor: pointer;
    transition: color 0.25s ease-out;
}
</style>