<template>
    <div class="project-panel">
        <h3>{{ this.projectName }}</h3>
        <div class="lower-project-content">
            <img :src="imageFile" />
        </div>
        <p>{{ this.projectText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        projectName: String,
        imgName: String,
        projectText: String
    },
    computed: {
        imageFile: function () {
            const url = require(`@/assets/${this.imgName}`)
            return url
        }
    }
}
</script>

<style scoped>
.project-panel {
    display: inline-block;
    width: 25vw;
    height: 25vh;
    border: inset;
    background-color: #444444;
    margin: 2vh;
    transition: margin-top 0.5s,
        margin-bottom 0.5s,
        margin-left 0.25s,
        margin-right 0.25s;
    padding: 0.75vh;
}

.project-panel:hover {
    margin-top: 0.25vh;
    margin-bottom: 3.75vh;
    margin: 0.25vh 1vh 3.75vh 3vh;
    transition: margin-top 0.5s,
        margin-bottom 0.5s,
        margin-left 0.25s,
        margin-right 0.25s;
    cursor: pointer;
}

img {
    display: inline-block;
    width: 9vw;
    margin-left: 1vw;
    clip-path: fill-box;
}
</style>