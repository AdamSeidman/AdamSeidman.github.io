<template>
<div class="mediabar-container">
    <a class="text-black first-logo" href="https://www.github.com/AdamSeidman" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="pointable nav-icon" />
    </a>
    <a class="text-black" href="https://www.linkedin.com/in/adam-j-seidman/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="pointable nav-icon" />
    </a>
    <a class="text-black" href="mailto:ajs1551@g.rit.edu">
        <font-awesome-icon :icon="['fa', 'envelope']" class="pointable nav-icon" />
    </a>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
div.mediabar-container {
    position: absolute;
    height: 1px;
}

.nav-icon {
    font-size: 1.75vw;
    position: relative;
    margin-top: 2vh;
    margin-left: 1vw;
    opacity: 0.6;
    transition: opacity 0.25s ease-in;
    color: black;
}

.first-logo {
    margin-left: 90vw;
}

.nav-icon:hover {
    opacity: 1.0;
    transition: opacity 0.25s ease-out;
}
</style>