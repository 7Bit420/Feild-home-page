(async () => {
    if (document.readyState != "complete") {
        await new Promise(res => document.addEventListener('DOMContentLoaded', res))
    }

    var navbar = document.querySelector('nav')
    document.body.addEventListener('scroll', (e) => {
        if (document.body.scrollTop >= 1) {
            navbar.style.opacity = "1"
        } else {
            navbar.style.opacity = "0"
        }
    })
})()