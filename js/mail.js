var form = document.getElementById("my-form");

async function handleSubmit(event) {
    console.error(event.currentTarget.className)
    event.preventDefault();

    var status = document.getElementById("status");
    var statusEN = document.getElementById("status-en");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            if ($("#my-form").hasClass("en")) {
                statusEN.innerHTML = "Your Mail Has Been Sent. I will return as soon as possible."
                status.innerHTML = ""
            } else {
                status.innerHTML = "Mailiniz Gönderildi. En Kısa Zamanda Dönüş Yapacağım.";
                statusEN.innerHTML = ""
            }
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    if ($("#my-form").hasClass("en")) {
                        statusEN.innerHTML = "Email Address Section is not left blank!"
                        status.innerHTML = ""
                    } else {
                        status.innerHTML = "Mail Adres Kısmı Boş Bırakılmaz!"
                        statusEN.innerHTML = ""
                    }
                } else {
                    if ($("#my-form").hasClass("en")) {
                        statusEN.innerHTML = "An Error Occurred While Submitting the Form!"
                        status.innerHTML = ""
                    } else {
                        status.innerHTML = "Form Gönderilirken Bir Hata Oluştu!"
                        statusEN.innerHTML = ""
                    }
                }
            })
        }
    }).catch(error => {
        if ($("#my-form").hasClass("en")) {
            statusEN.innerHTML = "An Error Occurred While Submitting the Form!"
            status.innerHTML = ""
        } else {
            status.innerHTML = "Form Gönderilirken Bir Hata Oluştu!"
            statusEN.innerHTML = ""
        }
    });
}
form.addEventListener("submit", handleSubmit)