<template>
  <div class="panel">
        <img class="proj-img" :src="require(`../assets/${this.project.imgName}`)"/>
        <div class="sub-panel">
            <span class="project-content">{{ this.project.content }}</span>
            <span class="project-content">Technologies Used: {{ this.techString }}</span>
        </div>
        <h3 class="panel-title">{{ this.project.name }}</h3>
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

<style lang="scss">
$panel-background-color: lightgray;
$lines-color:  white;
$text-color: white;
$line-positioning: 0.71rem;
$title-font-size: 0.065em;

.sub-panel {
    width: 77%;
    left: 11.5%;
    height: 79%;
    top: 21%;
    position: absolute;
    border-top: 1px solid $lines-color;
    opacity: 0;
    transition: opacity ease-out 420ms;
}

img.proj-img {
    position: absolute;
    width: 95%;
    height: 95%;
    margin: 2.5%;
}

div.panel {
  opacity: 0;
  background-color: $panel-background-color;

  &.main, &.left, &.right, &.moreLeft, &.moreRight {
    opacity: 1;
  }
}

.tech-used,
.project-content,
.panel-title {
  opacity: 0;
  height: 100%;
  width: 100;
  display: flex;
  vertical-align: center;
  justify-content: center;
  font-size: $title-font-size;
  color: $text-color;
}

.panel-title {
    padding-top: 2%;
}

.project-content {
    font-size: $title-font-size / 1.5;
    margin-top: 4.7%;
    height: auto;
}

div.panel.main {
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: $line-positioning;
    bottom: $line-positioning;
    left: $line-positioning;
    right: $line-positioning;
    opacity: 1;
    transition: transform ease-out 420ms;
  }
      
  &::before {
    border-top: 2px solid $lines-color;
    border-bottom: 2px solid $lines-color;
    transform: scale(0, 1);
  }
  &::after {
    border-left: 2px solid $lines-color;
    border-right: 2px solid $lines-color;
    transform: scale(1, 0);
  }
  
  &:hover {
    background-color: #fff8;
    
    img {
        opacity: 0.5;
        z-index: -1;
    }

    .sub-panel {
        opacity: 1;
    }

    .project-content,
    .panel-title {
      opacity: 1;
      text-shadow: 1px 1px #000a;
      transition: all 420ms;
    }
    
    &::before {
      transform: scale(1.08, 1);
    }
    &::after {
      transform: scale(1, 1.08);
    }
  }
}
</style>