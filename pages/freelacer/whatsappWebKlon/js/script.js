var counter = 0
var counter2 = 0
var counter3 = 0
var userInfoOpen = false

// Mesajlar arasi gecis
$(".users .user a").click(function(event) {
    $(".right div").removeClass("right-active")
    $("#" + event.currentTarget.id + "-message").addClass("right-active")
    $(".right .message-user").css("width", "100%")
    $(".main .messages").css("width", "auto")
    $(".user-information-card.active").removeClass("active")
    $(".main").scrollTop(99999999999999999999999999999999999999)

    counter = 0
    $(".footer-icons .footer-icons-open").css("opacity", "0")
    $(".footer-icons .footer-icons-open").css("bottom", "0")
    $(".footer-icons .footer-icons-open").css("z-index", "-1")
    $(".footer-icons #addition-link").css("background", "transparent")
    counter3 = 0
    $(".header-icons .dropdown-menu").css("display", "none")
    $(".header-icons #dropdown-menu-link").css("background", "transparent")
        // $(event.currentTarget).find($(".user-infos")).css("background", "transparent")
        // $(event.currentTarget).find($(".user-infos")).css("background", "#202c33")
})

// Kisi bilgisi ac
$(".user-information a").click(function(event) {
    $(".message-user .user-information-card").removeClass("active")
    $("#" + event.currentTarget.id + "-open").addClass("active")
    $(".right .message-user").css("width", "57%")
    $(".main .messages").css("width", "100%")
    userInfoOpen = true
    counter3 = 0
    $(".header-icons .dropdown-menu").css("display", "none")
    $(".header-icons #dropdown-menu-link").css("background", "transparent")
})

// Kisi bilgisi kapat
$(".user-information-card .header a").click(function() {
    $(".user-information-card.active").removeClass("active")
    $(".right .message-user").css("width", "100%")
    $(".main .messages").css("width", "auto")
    userInfoOpen = false
})

// Profil ac
$(".profile-picture #profile-link").click(function() {
    counter2 = 0
    $(".icons .dropdown-menu").css("display", "none")
    $(".icons #dropdown-menu-link").css("background", "transparent")
    $(".left .left-profile").addClass("left-active")
})

// Profil kapat
$(".profile-header #profile-back").click(function() {
    $(".left .left-profile").removeClass("left-active")
})

// Profil ici input ac
$(".profile-main-2 #name-link").click(function() {
    $(".profile-main-2 #name-input").css("border-bottom", "2px solid #00a884")
    document.getElementById("name-input").disabled = false
    document.getElementById("name-input").focus()
    $(".profile-main-2 #name-okey-link").css("transform", "scale(1)")
    $(".profile-main-2 #name-link").css("transform", "scale(0)")
})
$(".profile-main-2 #name-okey-link").click(function() {
    $(".profile-main-2 #name-input").css("border-bottom", "none")
    document.getElementById("name-input").disabled = true
    $(".profile-main-2 #name-okey-link").css("transform", "scale(0)")
    $(".profile-main-2 #name-link").css("transform", "scale(1)")
})

// Profil ici input kapat
$(".profile-main-2 #about-link").click(function() {
    $(".profile-main-2 #about-input").css("border-bottom", "2px solid #00a884")
    document.getElementById("about-input").disabled = false
    document.getElementById("about-input").focus()
    $(".profile-main-2 #about-okey-link").css("transform", "scale(1)")
    $(".profile-main-2 #about-link").css("transform", "scale(0)")
})
$(".profile-main-2 #about-okey-link").click(function() {
    $(".profile-main-2 #about-input").css("border-bottom", "none")
    document.getElementById("about-input").disabled = true
    $(".profile-main-2 #about-okey-link").css("transform", "scale(0)")
    $(".profile-main-2 #about-link").css("transform", "scale(1)")
})

// Topluluk ac
$(".left #community-link").click(function() {
    counter2 = 0
    $(".icons .dropdown-menu").css("display", "none")
    $(".icons #dropdown-menu-link").css("background", "transparent")
    $(".left .left-users").removeClass("left-active")
    $(".left .left-community").addClass("left-active")
})

// Topluluk kapat
$(".left #community-back").click(function() {
    $(".left .left-community").removeClass("left-active")
    $(".left .left-users").addClass("left-active")
})

// Yeni sohbet ac
$(".left #new-chat-link").click(function() {
    counter2 = 0
    $(".icons .dropdown-menu").css("display", "none")
    $(".icons #dropdown-menu-link").css("background", "transparent")
    $(".left .left-users").removeClass("left-active")
    $(".left .left-new-chat").addClass("left-active")
})

// Yeni sohbet kapat
$(".left #new-chat-back").click(function() {
    $(".left .left-new-chat").removeClass("left-active")
    $(".left .left-users").addClass("left-active")
})

// Eklenti ac-kapat
$(".footer-icons #addition-link").click(function() {
    counter++
    if (counter % 2 != 0) {
        $(".footer-icons .footer-icons-open").css("opacity", "1")
        $(".footer-icons .footer-icons-open").css("bottom", "65px")
        $(".footer-icons .footer-icons-open").css("z-index", "99")
        $(".footer-icons #addition-link").css("background", "#3d464bc4")
    } else {
        // $(".footer-icons .footer-icons-open").css("display", "none")
        $(".footer-icons .footer-icons-open").css("opacity", "0")
        $(".footer-icons .footer-icons-open").css("bottom", "0")
        $(".footer-icons .footer-icons-open").css("z-index", "-1")
        $(".footer-icons #addition-link").css("background", "transparent")
    }
})

// Menu ac-kapat
$(".icons #dropdown-menu-link").click(function() {
    counter2++
    if (counter2 % 2 != 0) {
        $(".icons .dropdown-menu").css("display", "flex")
        $(".icons #dropdown-menu-link").css("background", "#3d464bc4")
    } else {
        $(".icons .dropdown-menu").css("display", "none")
        $(".icons #dropdown-menu-link").css("background", "transparent")
    }
})

// Kullanici menu ac-kapat
$(".header-icons #dropdown-menu-link").click(function() {
    counter3++
    if (counter3 % 2 != 0) {
        if (!userInfoOpen) {
            $(".header-icons .dropdown-menu").css("display", "flex")
            $(".header-icons #dropdown-menu-link").css("background", "#3d464bc4")
        }
    } else {
        $(".header-icons .dropdown-menu").css("display", "none")
        $(".header-icons #dropdown-menu-link").css("background", "transparent")
    }
})

// Uctan uca sifreleme ac
$(".user-under #end-to-end-pass-link").click(function() {
    $(".end-to-end-pass").css("visibility", "visible")
    $(".end-to-end-pass .container").css("transform", "scale(1)")
        // $(".end-to-end-pass").css("transform", "scale(1)")
    $(".end-to-end-pass").fadeIn(100)
})

// Uctan uca sifreleme kapat
$(".end-to-end-pass #end-to-end-pass-back").click(function() {
    $(".end-to-end-pass .container").css("transform", "scale(0)")
        // $(".end-to-end-pass").css("visibility", "hidden").delay(400)
        // $(".end-to-end-pass").delay(4000).css("visibility", "hidden")
        // $(".end-to-end-pass").css("visibility", "hidden")

    $(".end-to-end-pass").delay(400).fadeOut(100)
        // $(".end-to-end-pass").css("transform", "scale(0)")
})