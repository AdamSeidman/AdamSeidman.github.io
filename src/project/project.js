import HomePage from '../views/HomePage'

class Project {
    constructor (name, template, content, technologies, imgName, id) {
        this.name = name
        this.template = template
        this.content = content
        this.technologies = technologies
        this.imgName = imgName
        this.id = id
    }
}

const projects = [
    new Project('DSF Bot', HomePage,
        'DSF Bot is a Discord robot that has many commands to generate random, but obvious facts. The concept of this project may be funny, but the implementation of this project was no joke!',
        [
            'Discord.JS', 'NodeJS', 'ServeStatic', 'SQLite'
        ], 'adam_seidman.jpg', 0)
]

const NUM_OF_TEST_PROJECTS = 6 // TODO remove these

for(let i = 1; i < NUM_OF_TEST_PROJECTS; i++) {
    let proj = JSON.parse(JSON.stringify(projects[0]))
    proj.id = i
    projects.push(proj)  // TODO REMOVE THIS
}

export default projects