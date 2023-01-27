var count = 0

$("header .dark-light-mode a").click(function() {
    count++
    if (count % 2 != 0) {
        $(".app").addClass("dark")
    } else {
        $(".app").removeClass("dark")
    }
})