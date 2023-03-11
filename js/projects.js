// Open Modal
$(".projects .project-box").click(function(event) {
    $(".modals").addClass("active")
    $("#" + event.currentTarget.id + "-modal").addClass("active")
})
$(".modals .btns .close-modal").click(function() {
    $(".modals").removeClass("active")
    $(".modals .modal").removeClass("active")
})

// Filter
$(".filter-links .link").click(function(event) {
    $(".filter-links .link").removeClass("active")
    $("#" + event.currentTarget.id).addClass("active")
    $(".projects .project-box").removeClass("active")
    $("." + event.currentTarget.id + "-box").addClass("active")
})