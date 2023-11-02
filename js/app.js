// Nav
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $(".navbar").addClass("change")
    } else {
        $(".navbar").removeClass("change")
    }
})

// Switch Lang
$(".languages").click(function() {
    $("body").toggleClass("en")
})

//// Dark Mode
// Control Dark Mode
if (localStorage.getItem("dark") === "enabled") {
    $("body").addClass("dark")

} else {
    $("body").removeClass("dark")
}
// Switch Dark Mode
$(".dark-light-mode").click(function() {
    $("body").toggleClass("dark")
    if ($("body").hasClass("dark")) {
        localStorage.setItem("dark", "enabled")
    } else {
        localStorage.setItem("dark", null)
    }
})

// Mobile Nav Settings
$(".mobile-nav .settings .settings-icon").click(function() {
    if ($(".mobile-nav .settings").hasClass("active")) {
        $(".mobile-nav .settings").removeClass("active")
    } else {
        $(".mobile-nav .settings").addClass("active")
    }
})

//Scroll Top
$(document).ready(function() {
    var scrollTop = $(".scroll-top");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).addClass("show")

        } else {
            $(scrollTop).removeClass("show")
        }

    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

//Prelaoder
$(window).on('load', function() {
    $('#loader-container').hide();
});

// Caching Data
// const resimURLs = ['img/ProfilePicture.webp', '/img/aekLogoBlack2.webp', '/img/aekLogoWhite2.webp', '/img/icon/favicon.ico', '/img/pwa/img/128x128.png', '/img/pwa/img/192x192.png'];

// if ('caches' in window) {
// console.log("girdi")
// caches.open('my-cache').then((cache) => {
// console.log("ilerledi")
// resimURLs.forEach((resimUrl) => {
// console.log("foreach acti")
// cache.match(resimUrl).then((response) => {
// if (response) {
// Önbellekten yükle
// Daha fazla işlem yapmak isterseniz burada response kullanabilirsiniz
// console.log("resimler onbellekten yuklendi")
// } else {
// Önbellekte yoksa sunucudan al ve önbelleğe ekle
// fetch(resimUrl).then((networkResponse) => {
// cache.put(resimUrl, networkResponse.clone());
// Daha fazla işlem yapmak isterseniz burada networkResponse kullanabilirsiniz
// console.log("sunucudan alindi")
// });
// }
// });
// });
// });
// }