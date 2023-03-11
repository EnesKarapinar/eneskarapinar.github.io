// Filter
$(".filter-links .link").click(function(event) {
    $(".filter-links .link").removeClass("active")
    $("#" + event.currentTarget.id).addClass("active")
    $(".certificates .certificate-box").removeClass("active")
    $("." + event.currentTarget.id + "-box").addClass("active")
})