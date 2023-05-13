//Scroll Top
$(document).ready(function() {
    var scroll_Top = $("#scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scroll_Top).addClass("show")

        } else {
            $(scroll_Top).removeClass("show")
        }

    });
    $(scroll_Top).click(function() {
        $(window).scrollTop(0)
    });
});

//Prelaoder
$(window).on('load', function() {
    $('#preloader').hide();
});