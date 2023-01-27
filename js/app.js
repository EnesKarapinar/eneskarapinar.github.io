//Header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 500) {
        $(".fix-header").removeClass("change")
    } else {
        $(".fix-header").addClass("change")
    }
})