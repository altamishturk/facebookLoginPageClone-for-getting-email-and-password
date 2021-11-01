const forgetPasswordBtn = document.querySelector('.forget-password');
const loginForm = document.querySelector('#login-form');
const forgetPasswordForm = document.querySelector('#forget-password-form');


forgetPasswordBtn.addEventListener('click', () => {
    loginForm.classList.add('display-none');
    forgetPasswordForm.classList.remove('display-none');
})

const goBackOne = document.querySelector('#go-back-one');
goBackOne.addEventListener('click', () => {
    loginForm.classList.remove('display-none');
    forgetPasswordForm.classList.add('display-none');
})


const createNewAccountBtn = document.querySelector('#create-new-account-btn');
const createAccountForm = document.querySelector('#create-account-form');
createNewAccountBtn.addEventListener('click', () => {
    loginForm.classList.add('display-none');
    createAccountForm.classList.remove('display-none');
})

const goBackTwo = document.querySelector('#go-back-two');
goBackTwo.addEventListener('click', () => {
    loginForm.classList.remove('display-none');
    createAccountForm.classList.add('display-none');
})

