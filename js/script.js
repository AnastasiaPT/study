'use strict';

let PersonalData = {
    email: "",
    pass: ""
}

let SubmitBtn = document.getElementById('avtorization_btn'),
    EmailValue = document.querySelector('.avtorization_email'),
    PassValue = document.querySelector('.avtorization_pass'),
    PassString = document.getElementsByClassName('avtorization_pass')[0];

SubmitBtn.addEventListener('click',function(){
    PersonalData.email = EmailValue.value;
    PersonalData.pass = PassValue.value;
    const { fetch: originalFetch} = window;

    window.fetch('server.php', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body : JSON.stringify(PersonalData)
    }).then( data => {
        alert("Всё ок!");
    }).catch(() => {
        alert("Ошибка");
    }).finally(() => {
        alert("Конец!");
    });

});


