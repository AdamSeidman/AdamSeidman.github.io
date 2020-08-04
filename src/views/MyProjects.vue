<template>
  <div class="project-container">
    <project-panel imgName="adam_seidman.jpg" :projectName="'TEST Project'" :projectText="'Yo yo what up my name jeff'" />
  </div>
</template>

<script>
import ProjectPanel from '../components/ProjectPanel'

export default {
  components: {
    ProjectPanel
  }
}
</script>

<style scoped>
div.project-container {
  margin: 7vh;
  position: absolute;
}
</style>