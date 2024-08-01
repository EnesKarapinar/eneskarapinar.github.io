var scrollPoss = $(window).scrollTop()
$(window).scroll(function() {
    // Nav
    var scrollPoss2 = $(window).scrollTop()
    if (scrollPoss >= scrollPoss2) {
        $("nav").css("opacity", "1")
    } else {
        $("nav").css("opacity", "0")
        $("nav").css("transition", "400ms")
    }
    scrollPoss = scrollPoss2


    // Homepage SplashImage
    var scrollPos = $(window).scrollTop();
    if (scrollPos >= 0 && scrollPos <= 900) {
        $('.splash-page .splash-background figure img').css({
            'left': 0 - (scrollPos / 5.6)
        });
    }

    // About page Image
    var scrollPosAbout = $(window).scrollTop();
    $('.about figure img').css({
        'left': 0 - (scrollPosAbout / 10)
    });
})

//Scroll Top
$(document).ready(function() {
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).addClass("show")

        } else {
            $(scrollTop).removeClass("show")
        }

    });
    $(".scrollTop .btn").click(function() {
        $(window).scrollTop(0)
    });
});

// Preloader
$(window).on('load', function() {
    $('#loader-container').hide();
});