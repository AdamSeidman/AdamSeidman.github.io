let i = 0

class Project {
    constructor (name, route, content, technologies, imgName) {
        if (imgName === '') {
            imgName = 'adam_seidman.jpg' // TODO remove this stuff when finished
        } else {
            imgName += '.png'
        }
        this.name = name
        this.route = route
        this.content = content
        this.technologies = technologies
        this.imgName = imgName
        this.id = i++
    }
}

const projects = [
    new Project('Bluetooth Robot', '',
        'A small robot that ran on a TI microcontroller that was given commands from a nearby tablet. This project was a collaboration with the Computer Engineering department at RIT.',
        [
            'Bluetooth', 'C++', 'Energia', 'Microcontrollers'
        ], 'bluetooth'),
    new Project('Cloud 18 Website', '',
        'Cloud 18 is a band run by students located at the University of Albany. With input from the band, I designed the website. It is a simple site, but is moderately CSS-intensive.', 
        [
            'Bootstrap', 'CSS', 'Github-Pages'
        ], 'cloud_18_logo'),
    new Project('DSF Bot', '',
        'DSF Bot is a Discord robot that has many commands to generate random, but obvious facts. The concept of this project may be funny, but the implementation is no joke!',
        [
            'Discord.JS', 'NodeJS', 'ServeStatic', 'SQLite'
        ], 'dsf_logo'),
    new Project('Gear Math Applets', '',
        'This series of applets use several different equations and solving methods to help the gearbox sub-team on RIT Baja figure out different properties of gears they are designing.',
        [
            'Java', 'Matlab', 'Python'
        ], 'gear_pic'),
    new Project('Grayscale Filter', '', 
        'gfdgfdgfdsz',
        [
            'Image Processing', 'Java'
        ], ''),
    new Project('MR System Controller', '',
        'Every year, RIT Baja builds a new vehicle while trying to stay innovative. In the last few years, we have developed an electronic shock absorber system. I designed a custom PCB for this project.',
        [
            'Arduino', 'KiCad', 'Python', 'SolidWorks'
        ], 'shock-absorber'),
    new Project('Personal Website', '',
        'That\'s this website! I created this site in July/August 2020 in my free time between classes. I wanted to try creating my own website with VueJS, and I am proud of the way it turned out.',
        [
            'Github-Pages', 'VS Code', 'VueJS'
        ], ''),
    new Project('Purchase Order System', '',
        'This is the oldest project listed here. I created this software my first year at RIT for my Baja teammates to use. The app took data on purchases that needed to be ordered and dealt with them.',
        [
            'IntelliJ', 'Java', 'Windows Server'
        ], 'money'),
    new Project('RIT Baja Website', '',
        'RIT Baja\'s previous website had a very old look to it. I collaborated on this project with one other student, and we went for a simple, modern one-page design.',
        [
            'AOS', 'Bootstrap', 'Instagram API', 'JQuery'
        ], 'baja_logo'),
    new Project('Line Following Robot', '',
        'fsdfsdfds',
        [
            'Arduino', 'C++', 'Color Sensor'
        ], ''),
    new Project('Shifter Knob', '',
        'hgfdhgfdhgf',
        [
            '3D Printing', 'Machining', 'SolidWorks'
        ], 'shifter'),
    new Project('Web Checkers', '',
        'Web Checkers was a semester long group project for the Introduction to Software Engineering class.', 
        [
            'Java', 'JavaScript', 'Spark'
        ], 'checker-board')
]

export default projects