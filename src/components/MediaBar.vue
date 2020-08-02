<template>
<div class="mediabar-container">
    <a class="text-black" href="https://www.github.com/AdamSeidman" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" class="pointable nav-icon" />
    </a>
    <a class="text-black" href="https://www.linkedin.com/in/adam-j-seidman/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="pointable nav-icon" />
    </a>
    <a class="text-black" href="" target="_blank">
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
}

.nav-icon {
    font-size: 3.5vh;
    position: relative;
    margin-top: 95vh;
    margin-left: 1vw;
    opacity: 0.625;
    transition: opacity 0.25s ease-in;
    color: black;
}

div.mediabar-container:first-child {
    margin-left: 0.4vw;
}

.nav-icon:hover {
    opacity: 1.0;
    transition: opacity 0.25s ease-out;
}
</style>