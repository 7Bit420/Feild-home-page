(async () => {
    if (document.readyState != "complete") {
        await new Promise(res => document.addEventListener('DOMContentLoaded', res))
    }

    var navbar = document.querySelector('nav')
    document.body.addEventListener('scroll', () => {
        if (document.body.scrollTop >= 200) {
            navbar.style.opacity = "1"
        } else {
            navbar.style.opacity = "0"
        }
    })
})()