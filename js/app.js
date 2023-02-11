//Header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 500) {
        $(".fix-header").removeClass("change")
    } else {
        $(".fix-header").addClass("change")
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

//Prelaoder
var loader = document.getElementById("preloader")
window.addEventListener("load", function() {
    loader.style.display = "none"
})