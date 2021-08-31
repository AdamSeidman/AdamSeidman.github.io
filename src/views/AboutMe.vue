<template>
    <div class="about-container">
        <div class="image-container">
            <img src="../assets/adam_seidman.jpg" class="invisible" />
        </div>
        <p class="invisible"><span>&nbsp;</span>Hi! I'm Adam. I'm currently in my fifth year at the Rochester 
            Institute of Technology. At RIT, I study Computer Engineering, and I am on an accelerated 
            track to get my bachelors and masters by the end of the year. I have also 
            completed an immersion in public policy. I am heavily involved with our school's Baja 
            SAE team, where I design electrical projects for our vehicle. For two years, 
            I have even served on the team's executive board. I have always loved everything about 
            both engineering and math. I enjoy learning about these skills, getting to use creativity, 
            and solving problems. When I am not at RIT, some of my favorite pastimes include chess, camping, 
            reading, and puzzles.
        </p>
    </div>
</template>

<script>
export default {
    mounted () {
        setTimeout(() => {
            let els = document.getElementsByClassName('invisible')
            for (let i = 0; i < els.length; i++) {
                els[i].classList.add('appear')
            }
        }, 250)
    }
}
</script>

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
    clip-path: circle(7.5vw at center);
    margin-top: -3vh;
    width: 20vw;
}

span {
    margin-right: 3vw;
}

p {
    text-align: justify;
    width: 70vw;
    display: inline-block;
    font-size: 3.75vh;
    margin-top: 9vh;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.appear {
    transition: opacity 1s;
}
</style>