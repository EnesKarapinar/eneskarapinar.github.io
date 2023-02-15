//Mobile Header
let nav = document.querySelector('.nav')

nav.querySelectorAll('li a').forEach((a, i) => {
    a.onclick = (e) => {
        if (a.classList.contains('nav-item-active')) return

        nav.querySelectorAll('li a').forEach(el => {
            el.classList.remove('nav-item-active')
        })

        a.classList.add('nav-item-active')

        let nav_indicator = nav.querySelector('.nav-indicator')

        nav_indicator.style.left = `calc(${(i * 20) + 1}vw)`
    }
})

//Switch Page
$(".mobile-app .nav a").click(function(event) {
    $(".content section").removeClass("active")
    $("#" + event.currentTarget.id + "-section").addClass("active")
})

//Mobile Modal
$(".mobile-app .content .projects .project a").click(function(event) {

    $(".mobile-app .content .projects .modals").addClass("active")
    $("#" + event.currentTarget.id + "-modal").addClass("active")
})
$(".btn-close .modal-close").click(function() {
    $(".mobile-app .content .projects .modals").removeClass("active")
    $(".mobile-app .content .projects .modals .modal").removeClass("active")
})