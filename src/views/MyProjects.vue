<template>
  <div class="project-container">
    <h2 class="invisible">Projects I've Completed</h2>
    <h4 class="invisible">Click on any project to learn more!</h4>
    <div class="projects-panel invisible">
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
      <project-panel :imgName="'adam_seidman.jpg'" :projectName="'TEST Project'" :projectText="this.msg" />
    </div>
  </div>
</template>

<script>
import ProjectPanel from '../components/ProjectPanel'

export default {
  data () {
    return {
      msg: 'The concept of this project may be funny, but the implementation of this project was no joke!'
    }
  },
  components: {
    ProjectPanel
  },
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
h2 {
  font-size: 6vh;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0px;
  margin-bottom: 1.5vh;
  cursor: default;
}

h4 {
  margin: 0px;
  font-size: 3vh;
  cursor: default;
  font-family: 'Indie Flower', 'Franklin Gothic Medium', Arial, sans-serif;
  margin-bottom: 3vh;
}

div.project-container {
  margin: 7vh;
  position: absolute;
  text-align: center;
  width: 100vw;
  margin-left: 0px;
}

.appear {
    transition: opacity 0.5s;
}
</style>