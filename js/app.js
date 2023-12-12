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
    if ($("body").hasClass("en")) {
        setLanguage("en")
    } else {
        setLanguage("tr")
    }
})

// Dil dosyalarını yüklemek için fonksiyon
function loadLanguage(lang) {
    $.getJSON(`../js/lang/${lang}.json`, function(data) {
        $('[data-translate]').each(function() {
            var key = $(this).data('translate');
            if ($(this).children().length === 0) {
                // Eğer etiketin iç içe etiketleri yoksa
                $(this).text(data[key] || "Missing translation");
            } else {
                // Eğer etiketin iç içe etiketleri varsa
                $(this).contents().filter(function() {
                    return this.nodeType === 3; // Düğüm tipi metin ise
                }).each(function() {
                    var text = $.trim($(this).text());
                    if (text) {
                        $(this).replaceWith(data[key] || "Missing translation");
                    }
                });
            }
        });
    });
}

// Kullanıcının seçtiği dili ayarlamak ve saklamak için fonksiyon
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    $("html").attr("lang", lang)
    $("body").attr("class", lang)
    loadLanguage(lang);
}

// Sayfa yüklendiğinde kullanıcının daha önce seçtiği dili yüklemek için fonksiyon
$(document).ready(function() {
    var language = localStorage.getItem('language') || 'tr'; // Varsayılan dil
    setLanguage(language);
});


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