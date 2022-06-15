<template>
    <div class="navbar-container">
        <router-link to="/">HOME</router-link>
        <router-link to="/projects">PROJECTS</router-link>
        <a href="https://github.com/AdamSeidman/AdamSeidman.github.io/raw/main/src/assets/Adam_Seidman_Resume_2022.pdf" download>RESUME</a>
    </div>
</template>

<style lang="scss">
a.resume {
    margin: 0px !important;
}

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
    font-size: 1.75vh;
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