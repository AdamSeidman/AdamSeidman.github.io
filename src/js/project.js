let i = 0

class Project {
    constructor (name, route, content, technologies, imgName) {
        if (imgName === '') {
            imgName = 'adam_seidman.jpg'
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
    new Project('MR System Controller', '',
        'Every year, RIT Baja builds a new vehicle while trying to stay innovative. For several years, we had developed an electronic shock absorber system. I designed a PCB and an enclosure for this project.',
        [
            'C', 'KiCad', 'Python', 'SolidWorks', 'Atmel'
        ], 'shock-absorber'),
    new Project('RIT Baja Website', 'https://www.rit.edu/clubs/baja/',
        'RIT Baja\'s previous website had a very old look to it. I collaborated on this project with one other student, and we went for a simple, modern one-page design.',
        [
            'AOS', 'Bootstrap', 'Instagram API', 'JQuery'
        ], 'baja_logo'),
    new Project('Basketball Shot Trainer', 'https://github.com/AdamSeidman/Basketball-Shot-Trainer',
        'For my senior design project, I worked in a small group to create a basketball shot trainer for the Unified Sports organization. The resulting device analyzes body motion through a camera and a wearable IMU.',
        [
            'Adafruit Feather', 'Bluetooth', 'C', 'KiCad', 'Swift'
        ], 'shot_trainer'),
    new Project('Bluetooth Robot', '',
        'A small robot that ran on a TI microcontroller that was given commands from a nearby tablet. This project was a collaboration with the Computer Engineering department at RIT.',
        [
            'Bluetooth', 'C++', 'Energia', 'Microcontrollers'
        ], 'bluetooth'),
    new Project('Parallel Ray Tracer', 'https://github.com/AdamSeidman/MPS-RayTracer',
        'The parallel ray tracer project was a half-semester long project for multiple processor systems. The program took variable numbers of processors and dynamically rendered an image using ray tracing.',
        [
            'Image Processing', 'MPI'
        ], 'multi-cpu'),
    new Project('DSF Bot', 'https://github.com/AdamSeidman/DSF-Discord-Bot',
        'DSF Bot is a Discord text bot that has many commands to generate random, but obvious facts. The concept of this project may be funny, but the implementation is no joke!',
        [
            'Discord.JS', 'NodeJS', 'ServeStatic', 'SQLite'
        ], 'dsf_logo'),
    new Project('Baja Math Applets', '',
        'This series of applets use several different equations and solving methods to help the driveline sub-team on RIT Baja figure out different properties of components they are designing.',
        [
            'Java', 'Matlab', 'Python'
        ], 'gear_pic'),
    new Project('Song Chain Bot', 'https://top.gg/bot/1282445532559704219',
        'Song Chain Bot is a Discord bot to play games with your friends where you attempt to connect spotify songs. It also includes leaderboards and stats.',
        [
            'Spotify API', 'Discord.JS', 'NodeJS', 'SQL'
        ], 'song_chain_logo'),
    new Project('Line Following Robot', '',
        'This robot was the final project for my Introduction to Computer Engineering class. The robot had to navigate a maze and stop for any obstacles. It was even programmed to do a small dance at the end of the maze!',
        [
            'Arduino', 'C++', 'Sensors'
        ], 'line-follow'),
    new Project('Custom Electromagnet', '', 
        'I designed and manufactured an electromagnet to go inside a front differential for my last RIT Baja vehicle.',
        [
            'EM Simulations', 'Soldering', 'SolidWorks'
        ], 'e-magnet'),
    new Project('Shifter Knob', '',
        'After my old shifter started to deteriorate, I decided it was time to make a custom one. I 3D printed a prototype and drove around with it. I then used several resources to make the real thing.',
        [
            '3D Printing', 'Machining', 'SolidWorks'
        ], 'shifter'),
    new Project('Baja Wordle', 'https://seidman-ad.am/bajadle',
        'Better know as "RIT Baja-dle", I jumped on the wordle craze and made a vue app for this website using only RIT Baja terms. It has both daily and infinite versions. I also implemented cookies for settings.',
        [
            'JavaScript', 'Vue-Cookies', 'VueJS'
        ], 'wordle'),
    new Project('Web Checkers', 'https://github.com/AdamSeidman/Checkers-App',
        'Web Checkers was a semester long group project for the Intro to Software Engineering class. It was required to connect to other players over the web to play a game of checkers.', 
        [
            'Java', 'JavaScript', 'Maven', 'Spark'
        ], 'checker-board'),
    new Project('Purchase Order System', '',
        'This is the oldest project listed here. I created this software my first year at RIT for my Baja teammates to use. The app took data on purchases that needed to be ordered and dealt with them.',
        [
            'IntelliJ', 'Java', 'Windows Server'
        ], 'money'),
    new Project('Personal Website', 'https://github.com/AdamSeidman/AdamSeidman.github.io',
        'That\'s this website! I created this site in July/August 2020 in my free time between classes. Recently, I have been working with 3D CSS to create this project carousel. I wanted to try creating my own website with VueJS, and I am proud of the way it turned out.',
        [
            '3D CSS', 'Github-Pages', 'Sass', 'Shell', 'VS Code', 'VueJS'
        ], 'vuejs'),
    new Project('Power Distribution Box', '',
        'The box has three different generator inputs of varying sizes and provides several different 120v and 240v outputs. Each set of outputs were switched to set which generator was it\'s source. At any given time, the box is connected to several grinders, welders, etc.',
        [
            'AC Power', 'Contactors', 'Generators', 'NEMA', 'Wiring'
        ], 'generator'),
    new Project('Stackable DAQ', 'https://github.com/AdamSeidman/SDAQ',
        'Leading a small team, I created a new Raspberry Pi-based data acquisition system to be used for RIT Baja. These new technologies will/are being used to replace most of the teams\' outdated hardware.',
        [
            'C', 'I2C', 'KiCad', 'Python', 'Raspbian', 'Tkinter'
        ], 'rpi')
]

export default projects
