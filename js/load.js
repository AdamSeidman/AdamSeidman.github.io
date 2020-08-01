var completeSetup = function () {
    let body = document.getElementById('body')
    if (screen.width > screen.height) {
        body.classList.add('landscape')
    } else {
        body.classList.add('portrait')
    }
}