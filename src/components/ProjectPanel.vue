<template>
    <div class="project-panel-container" @click="openProject">
        <div class="project-panel">
            <h3>{{ this.project.name }}</h3>
            <div class="lower-project-content">
                <img :src="require(`../assets/${this.project.imgName}`)" class="inline" />
                <div class="right-panel inline">
                    <p class="project-content">
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
    margin: 0px;
    margin-top: 0.5vh;
}
.right-panel {
    width: 14vw;
    margin: 1vh 0px 0px 11vw;
    display: inline-block;
    position: absolute;
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
    margin: 0px;
    width: 25vw;
    display: inline-block;
}

.project-panel-container:hover {
    cursor: pointer;
    padding: 0.25vh 0.75vw 2.75vh 2.25vw;
}

img {
    width: 9vw;
    height: 16.75vh;
    margin: 1.5vh 0.1vw 0px 1vw;
    position: absolute;
}

hr {
    width: 13.25vw;
    margin-right: 0.8vw;
    background-color: lightgray;
    height: 2px;
    position: absolute;
    top: 10vh;
}


p {
    text-align: justify;
    margin: 0px;
    margin-right: 1vw;
    display: inline-block;
    font-size: calc(0.55vw + 0.33vh);
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height: 12vh;
}

span.tech-used {
    font-family: sans-serif;
    font-size: 1.75vh;
}

p.tech-used {
    text-align: left;
}

span.begin-paragraph {
    margin-left: 1vw;
}
</style>