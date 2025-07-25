<template>
  <div class="panel" @click="openProject">
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
        },
        routeNonEmpty: function () {
            return this.project.route !== undefined && this.project.route.length > 0
        }
    },
    methods: {
        openProject: function () {
            if (this.routeNonEmpty) {
                window.open(this.project.route, '_blank').focus()
            }
        }
    },
    mounted() {
      if (this.routeNonEmpty) {
        this.$el.setAttribute("id", "clickable")
      }
    }
}
</script>

<style>
.sub-panel {
	 width: 77%;
	 left: 11.5%;
	 height: 79%;
	 top: 21%;
	 position: absolute;
	 border-top: 1px solid white;
	 opacity: 0;
	 transition: opacity ease-out 420ms;
}
 img.proj-img {
	 position: absolute;
	 width: 95%;
	 height: 95%;
	 margin: 2.5%;
	 animation: fadeIn 1.25s;
}
 div.panel {
	 opacity: 0;
	 background-color: lightgray;
}
 div.panel.main, div.panel.left, div.panel.right, div.panel.moreLeft, div.panel.moreRight {
	 opacity: 1;
	 animation: appearSlowly 375ms;
}
 div.panel:not(.main):not(.right):not(.left):not(.moreLeft):not(.moreRight) {
	 animation: disappearQuickly 500ms;
	 opacity: 0;
}
 .tech-used, .project-content, .panel-title {
	 opacity: 0;
	 height: 100%;
	 width: 100;
	 display: flex;
	 vertical-align: center;
	 justify-content: center;
	 font-size: 0.065em;
	 color: white;
}
 .panel-title {
	 padding-top: 2%;
}
 .project-content {
	 font-size: 0.0433333333em;
	 margin-top: 4.7%;
	 height: auto;
}
 div.panel.main#clickable {
	 cursor: pointer;
}
 div.panel.main::before, div.panel.main::after {
	 content: '';
	 position: absolute;
	 top: 0.71rem;
	 bottom: 0.71rem;
	 left: 0.71rem;
	 right: 0.71rem;
	 opacity: 1;
	 transition: transform ease-out 420ms;
}
 div.panel.main::before {
	 border-top: 2px solid white;
	 border-bottom: 2px solid white;
	 transform: scale(0, 1);
}
 div.panel.main::after {
	 border-left: 2px solid white;
	 border-right: 2px solid white;
	 transform: scale(1, 0);
}
 div.panel.main:hover {
	 background-color: #888;
}
 div.panel.main:hover img {
	 opacity: 0.5;
	 z-index: -1;
}
 div.panel.main:hover .sub-panel {
	 opacity: 1;
}
 div.panel.main:hover .project-content, div.panel.main:hover .panel-title {
	 opacity: 1;
	 text-shadow: 1px 1px #000 a;
	 transition: all 420ms;
}
 div.panel.main:hover::before {
	 transform: scale(1.08, 1);
}
 div.panel.main:hover::after {
	 transform: scale(1, 1.08);
}
 
</style>