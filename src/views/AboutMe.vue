<template>
    <div class="about-container">
        <div class="image-container">
            <img src="../assets/adam_seidman.jpg" />
        </div>
        <p>My name is Adam.</p>
    </div>
</template>

<style scoped>
.about-container {
    text-align: center;
    width: 100vw;
    position: absolute;
    height: 1px;
}

.image-container {
    width: 80vh;
    display: inline-block;
    margin-top: 10vh;
}

img {
    clip-path: circle(18vh at center);
    margin-top: -4vh;
}

p {
    font-size: 3vh;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
</style>