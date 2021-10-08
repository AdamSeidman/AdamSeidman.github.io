<template>
    <div class="about-container">
        <div class="image-container">
            <img src="../assets/adam_seidman.jpg" class="invisible" />
        </div>
        <p class="invisible"><span>&nbsp;</span>Hi! I'm Adam. {{ this.aboutBlurb }}
        </p>
    </div>
</template>

<script>
import response from '../js/about'

export default {
    mounted () {
        setTimeout(() => {
            let els = document.getElementsByClassName('invisible')
            for (let i = 0; i < els.length; i++) {
                els[i].classList.add('appear')
            }
        }, 250)
    },
    computed: {
        aboutBlurb() {
            return response.content;
        }
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
    /*width: 80vh;*/
    width: 100%;
    display: inline-block;
    margin-top: 10vh;

    display: flex;
    vertical-align: center;
    justify-content: center;
}

img {
    clip-path: circle(7.5vw at center);
    margin-top: -3vh;
    width: 20%;
}

span {
    margin-right: 3vw;
}

p {
    text-align: justify;
    width: 70vw;
    display: inline-block;
    font-size: 3.75vh;
    margin-top: 4.5%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.appear {
    transition: opacity 1s;
}
</style>