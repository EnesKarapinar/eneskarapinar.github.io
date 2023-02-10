$(window).scroll(function() {
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 300) {
        $(".social-media").css("display", "none")
    } else {
        $(".social-media").css("display", "flex")
    }
    if ($(window).scrollTop() >= 103 && $(window).scrollTop() <= 863 || $(window).scrollTop() >= 2220 && $(window).scrollTop() <= 2878) {
        $("footer").css("display", "none")
    } else {
        $("footer").css("display", "flex")
    }
    if ($(window).scrollTop() >= 700 && $(window).scrollTop() <= 1500) {
        $("header").css("background", "var(--color-black)")
        $(".header-inner a").css("color", "var(--color-white)")
    } else if ($(window).scrollTop() >= 1518 && $(window).scrollTop() <= 2804) {
        $("header").css("background", "transparent")
        $(".header-inner a").css("color", "var(--color-white)")
    } else {
        $("header").css("background", "var(--color-white)")
        $(".header-inner a").css("color", "var(--color-black)")
    }
})