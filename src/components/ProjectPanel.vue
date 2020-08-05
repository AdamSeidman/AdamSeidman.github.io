<template>
    <div class="project-panel-container" @click="openProject">
        <div class="project-panel">
            <h3>{{ this.project.name }}</h3>
            <div class="lower-project-content">
                <img :src="require(`../assets/${this.project.imgName}`)" />
                <div class="image-fill">&nbsp;</div>
                <p>
                    <span class="begin-paragraph">&nbsp;</span>
                    {{ this.project.content }}
                </p>
                <hr>
                <p class="tech-used">
                    <span class="tech-used">Technologies Used:</span>
                    {{ this.techString }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
    },
    computed: {
        techString: function () {
            if (this.project.technologies.length < 1) {
                return ''
            }
            let str = ''
            let i = 1
            this.project.technologies.forEach(x => {
                if (i === this.project.technologies.length) {
                    str += x
                } else {
                    str += `${x}, `
                }
                ++i
            })
            return str
        }
    },
    methods: {
        openProject: function () {
            this.$router.push(`/${this.project.route}`)
        }
    }
}
</script>

<style scoped>
h3 {
    font-size: 3vh;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;
}

.project-panel {
    width: 25vw;
    height: 25vh;
    border: outset;
    background-color: #dde0dd;
    text-align: center;
}

.project-panel-container {
    display: inline-block;
    padding: 1.5vh 1.5vw 1.5vh 1.5vw;
    transition: padding 0.25s ease-in-out;
    vertical-align: top;
}

.lower-project-content {
    vertical-align: top;
    text-align: left;
}

.project-panel-container:hover {
    cursor: pointer;
    padding: 0.25vh 0.75vw 2.75vh 2.25vw;
}

img, .image-fill {
    display: inline-block;
    width: 9vw;
    margin-left: 1vw;
    margin-right: 1vw;
    clip-path: fill-box;
    margin-top: 1vh;
}

hr {
    position: absolute;
    margin-left: 10.5vw;
    margin-top: -5.5vh;
    width: 14vw;
    background-color: lightgray;
    height: 2px;
}


p {
    display: inline-block;
    text-align: justify;
    margin: 0px;
    position: absolute;
    margin-left: -11vw;
    margin-top: 1vh;
    width: 13vw;
    font-size: 1.5vh;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

p.tech-used {
    margin-top: 14vh;
    text-align: left;
}

span.tech-used {
    font-family: sans-serif;
    font-size: 1.75vh;
}

span.begin-paragraph {
    margin-left: 1vw;
}
</style>