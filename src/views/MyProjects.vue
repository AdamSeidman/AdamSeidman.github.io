<template>
  <div class="project-container">
    <h2 class="invisible">Projects I've Completed</h2>
    <!--h4 class="invisible">Click on any project to learn more!</h4-->
    <div class="projects-panel invisible">
      <project-panel v-for="project in this.projects" :key="`project_${project.id}`" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectPanel from '../components/ProjectPanel'
import projects from '../project/project'

export default {
  data () {
    return {
      projects: projects
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