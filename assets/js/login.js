var loginData = ['ibrahimovnuran008@gmail.com','nuranibra@gmail.com']

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailAnswer = document.querySelector('#email-text');
const passwordAnswer = document.querySelector('#password-text');
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){

    if((document.getElementById('email').value).length <= 3){
        document.getElementById('email-text').style.color = 'red'
        emailAnswer.innerHTML = 'Emailiniz 3 simvoldan kiçik ola bilməz'

    } else if ((document.getElementById('email').value).endsWith('@gmail.com' || '@mail.com') === false){
        document.getElementById('email-text').style.color = 'red'
        emailAnswer.innerHTML = 'Bildiyimiz bir mail adresi yazın'
    }
    else if ((document.getElementById('email').value).length > 3){
        if ((document.getElementById('email').value).endsWith('@gmail.com' || '@mail.com') === true){
            for(let i = 0;loginData.length > i;i++){
                const hesab = loginData[i]
                if((document.getElementById('email').value) === hesab){
                    document.getElementById('email-text').style.color = 'green'
                    emailAnswer.innerHTML = 'Emailiniz tesdiqləndi'
                } 
                 else if (!(document.getElementById('email').value) === (hesab)){
                    document.getElementById('email-text').style.color = 'red'
                    emailAnswer.innerHTML = 'Emailiniz sistemdə yoxdu'
                 }
                 if((document.getElementById('password').value).length <= 8){
                    document.getElementById('password-text').style.color = 'red'
                    passwordAnswer.innerHTML = 'Şifrəniz 8 simvoldan az ola bilməz'
                 } else if(document.getElementById('password').value.length > 8){
                    document.getElementById('password-text').style.color = 'green'
                    passwordAnswer.innerHTML = 'Şifrəniz güclüdür!'

                    window.location.href="./main.html"
                 }
            }
        } 
    } 
})

