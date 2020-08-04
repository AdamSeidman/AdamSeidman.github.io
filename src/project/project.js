class Project {
    constructor (name, route, content, technologies, imgName, id) {
        this.name = name
        this.route = route
        this.content = content
        this.technologies = technologies
        this.imgName = imgName
        this.id = id
    }
}

const projects = [
   
    new Project('Cloud 18 Website', '',
        'Cloud 18 is a band run by students located at the University of Albany. With input from the band, I designed the website. It is a simple site, but is moderately CSS-intensive.', 
        [
            'Bootstrap', 'CSS', 'Github-Pages'
        ], 'adam_seidman.jpg', 0),
    new Project('DSF Bot', '',
        'DSF Bot is a Discord robot that has many commands to generate random, but obvious facts. The concept of this project may be funny, but the implementation is no joke!',
        [
            'Discord.JS', 'NodeJS', 'ServeStatic', 'SQLite'
        ], 'adam_seidman.jpg', 1),
    new Project('MR System Controller', '',
        'Every year, RIT Baja builds a new vehicle while trying to stay innovative. In the last few years, we have developed an electronic shock absorber system. I designed a custom PCB for this project.',
        [
            'Arduino', 'KiCad', 'SolidWorks'
        ], 'adam_seidman.jpg', 2),
    new Project('Personal Website', '',
        'That\'s this website! I created this site in July/August 2020 in my free time between classes. I wanted to try using VueJS for it, and I am proud of the way it turned out.',
        [
            'Github-Pages', 'VS Code', 'VueJS'
        ], 'adam_seidman.jpg', 3),
    new Project('Purchase Order System', '',
        'This is the oldest project listed here. I created this software my first year at RIT for my Baja teammates to use. The app took data on purchases that needed to be ordered and dealt with them.',
        [
            'IntelliJ', 'Java', 'Windows Server'
        ], 'adam_seidman.jpg', 4),
    new Project('RIT Baja Website', '',
        'RIT Baja\'s old website had a very old look to it. I collaborated on this project with one other student, and we went for a simple, modern one page design.',
        [
            'AOS', 'Bootstrap', 'Instagram API'
        ], 'adam_seidman.jpg', 5)
]

export default projects