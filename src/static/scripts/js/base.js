(async () => {
    if (document.readyState != "complete") {
        await new Promise(res => document.addEventListener('DOMContentLoaded', res))
    }

    var nav = document.querySelector('nav')
    var main = document.querySelector('main')
    main.addEventListener('scroll', (ev) => {
        if (main.scrollTop > 400) { nav.style.opacity = "1" } else { nav.style.opacity = "0" }
        
    })
})()