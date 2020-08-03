<template>
    <div class="navbar-container">
        <router-link to="/">HOME</router-link>
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/projects">PROJECTS</router-link>
        <router-link to="">RESUME</router-link>
    </div>
</template>

<style lang="scss">
div.navbar-container {
    position: absolute;
    text-align: center;
    width: 100vw;
    margin-top: 2vh;
    top: 0;
}

div.navbar-container a {
    text-decoration: none;
    color: #5f5f5f;
    margin-left: 1vw;
    margin-right: 1vw;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: color 0.175s ease-in;
}

div.navbar-container a:hover {
    color: black;
    cursor: pointer;
    transition: color 0.25s ease-out;
}

div.home-container + div.navbar-container {
    a {
        color: #cccccc;
    }

    a:hover {
        color: white;
    }
}
</style>