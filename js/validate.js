const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const interest = document.querySelector('.interest')
const submit = document.querySelector('.submit-form')

submit.addEventListener('click', ()=> {
    if (fullName.value == '' || email.value == '' || interest.value == '') {
        alert('Maaf, Isi yang benar ya.')
    } else if (fullName.value.length < 5) {
        alert('Masukkan nama minimal panjang karakter 5 huruf.')
    } else if(email.value.indexOf('@gmail.com') == -1){
        alert('Masukkan email yang benar ya.')
    } else {
        alert('Berhasil terkirim!')
    }
})