<template>
    <div class="projects-content">
        <div class="arrow" id="triangle-left"></div>
        <div class="scene">
            <div id="cube">
                <div class="panels">
                    <div id="bkg" class="main hide"></div>
                </div>
                <div class="panels" id="panels">
                    <project-panel v-for="project in this.projects" :key="`project_${project.id}`" :project="project"/>
                </div>
            </div>
        </div>
        <div class="arrow" id="triangle-right"></div>
    </div>
</template>

<script>
import ProjectPanel from '../components/ProjectPanel'
import projects from '../project/project'

var index = 0;
var nodes = undefined;
var length = 0;
var bkg = undefined;
var timeout = undefined;

export default {
    data () {
        return {
            projects: projects
        }
    },
    components: {
        ProjectPanel
    },
    methods: {
        showBkg (time) {
            timeout = setTimeout(function() {
            bkg.className = "main";
            timeout = undefined;
            }, time);
        },
        removeClasses () {
            if (timeout !== undefined) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            bkg.classList.add("hide");
            for (var i = 0; i < length; i++) {
                nodes[i].className = "panel";
            }
            this.showBkg(425);
        },
        assignClasses () {
            nodes[index].classList.add("main");
            nodes[(index + 1) % length].classList.add("right");
            nodes[(index + 2) % length].classList.add("moreRight");
            nodes[((length + index) - 1) % length].classList.add("left");
            nodes[((length + index) - 2) % length].classList.add("moreLeft");
        },
        increment () {
            this.removeClasses();
            index = (index + 1) % length;
            this.assignClasses();
        },
        decrement () {
            this.removeClasses();
            index = (index + length - 1) % length;
            this.assignClasses();
        }
    },
    mounted () {
        nodes = document.getElementById("panels").children;
        length = nodes.length;
        bkg = document.getElementById("bkg");

        this.assignClasses();
        this.showBkg(620);

        document.getElementById("triangle-left").onclick = this.decrement;
        document.getElementById("triangle-right").onclick = this.increment;
    }
}
</script>

<style lang="scss" scoped>
$translateZ-amount: 1.75em;
$pic-width: 0.8em;
$degree-change: 30deg;
$cylinder-top: -0.4em;
$transition-time: 420ms;
$font-size: 13.5vw;
$perspective: 4em;
$arrow-color: #333;

.projects-content {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: $font-size;
    
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

#bkg {
	position: absolute;
    top: $cylinder-top;
	height: $pic-width;
	width: $pic-width;
    background-color: black;
    z-index: -1;
    transition: all 0s;
}

.hide {
    opacity: 0;
    display: none;
    position: fixed;
}

.scene {
	width: 100%;
    height: 100%;
	perspective: $perspective;
    position: fixed;
}

#cube {
    position: relative;
    left: 50%;
    top: 50%;
	transform-style: preserve-3d;
	transform: rotateX(-5deg) rotateY(0deg) rotateZ(0deg);
}

.panels {
	transform-style: preserve-3d;
    transition: all $transition-time;
}

.panels > div {
	position: absolute;
    top: $cylinder-top;
	height: $pic-width;
	width: $pic-width;
    transition: all $transition-time;
    border: 3px solid black;
    border-radius: 15px;
}

.main {
  transform: translateX($pic-width / -2) rotateY(0deg) translateZ($translateZ-amount);
}

.right {
    transform: translateX($pic-width / -2) rotateY($degree-change) translateZ($translateZ-amount);
}
.moreRight {
    transform: translateX($pic-width / -2) rotateY($degree-change * 2) translateZ($translateZ-amount);
}
.left {
    transform: translateX($pic-width / -2) rotateY($degree-change * -1) translateZ($translateZ-amount);
}
.moreLeft {
    transform: translateX($pic-width / -2) rotateY($degree-change * -2) translateZ($translateZ-amount);
}

.arrow {
    width: 0;
    height: 0;
    position: absolute;
    border-top: 1.9vh solid transparent;
    border-bottom: 1.9vh solid transparent;
    animation: fadeIn 2.5s;
    cursor: pointer;
    top: 50%;
    z-index: 3;
  
    &#triangle-left {
        right: 6%;
        border-left: 0.1em solid $arrow-color;
    }
    &#triangle-right {
        left: 6%;
        border-right: 0.1em solid $arrow-color;
    }
}


@keyframes fadeIn {
  0%, 35% { opacity: 0; }
  100% { opacity: 1; animation-timing-function: ease-in; }
}
</style>

<!--

/* todo: remove */

#squares {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHmklWCsY6sTDgS1Gxv-pZ4aEaCOgtvgOzg&usqp=CAU");
}

#sun {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpBDv41cO_nVmh6S3TztOG50ZzhUDav3w1Q&usqp=CAU");
}

#windowP {
  background-image: url("https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
}

#window {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TDR6Rk5N83Khx-ZRzX5375ZzCx9ao0vcUQ&usqp=CAU");
}

#building {
  background-image: url("https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
}

#math {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwmJd22bivmlcFRyOnB-VIOk-gn8a4aAI4g&usqp=CAU");
}

#mister {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwnCanQ7dgSfYKymyi1b0rx23l1YeoDacjw&usqp=CAU");
}

#smiley {
  background-image: url("https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3");
}

#chips {
  background-image: url("https://studiousguy.com/wp-content/uploads/2021/05/Craft-paper.jpg");
}

-->