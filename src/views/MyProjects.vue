<template>
    <div class="projects-content">
        <h2>Projects I've Completed</h2>
        <h4>{{ this.mouseVerb }} any project to learn more!</h4>
        <div class="arrow" id="triangle-left"></div>
        <div class="scene">
            <div id="cube">
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
import projects from '../js/project'
import helperFunctions from '../js/helpers'

var index = 0;
var nodes = undefined;
var length = 0;

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
        removeClasses () {
            for (var i = 0; i < length; i++) {
                nodes[i].className = "panel";
            }
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
    computed: {
        mouseVerb() {
            if (helperFunctions.isMobile() || helperFunctions.isTablet()) {
                return "Tap on"
            }
            return "Hover over"
        }
    },
    mounted () {
        nodes = document.getElementById("panels").children;
        length = nodes.length;

        this.assignClasses();

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

h2 {
  font-size: 6vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0px;
  margin-bottom: 1.5vh;
  cursor: default;
  top: 12.5%;
  position: absolute;
  animation: fadeIn 2.5s;
}

h4 {
  margin: 0px;
  font-size: 3vh;
  cursor: default;
  font-family: 'Indie Flower', 'Franklin Gothic Medium', Arial, sans-serif;
  margin-bottom: 3vh;
  animation: fadeIn 2.5s;
  position: absolute;
  top: 20%;
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

</style>