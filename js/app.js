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