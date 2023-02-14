//Header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 500) {
        $(".fix-header").removeClass("change")
    } else {
        $(".fix-header").addClass("change")
    }
})

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

//Projects
$(".content-projects .project").click(function(event) {
    if ($("#" + event.currentTarget.id).hasClass("active")) {
        $("#" + event.currentTarget.id).removeClass("active")
        $("#" + event.currentTarget.id).addClass("inactive")
    } else {
        $("#" + event.currentTarget.id).addClass("active")
        $("#" + event.currentTarget.id).removeClass("inactive")
    }

})

//Scroll Top
$(document).ready(function() {
    var scrollTop = $(".scroll-top");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
            $(".scroll-top span").removeClass("up")
        }

    });
    $(scrollTop).click(function() {
        if (scrollTop != 0) {
            $(".scroll-top span").addClass("up")
        }
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

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

//Prelaoder
var loader = document.getElementById("preloader")
window.addEventListener("load", function() {
    loader.style.display = "none"
})