var count2 = 0

$("header .langs a").click(function() {
    count2++
    if (count2 % 2 != 0) {
        $(".app").addClass("en")
        $("#my-form").addClass("en")
    } else {
        $(".app").removeClass("en")
        $("#my-form").removeClass("en")
    }
})