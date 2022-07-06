const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const btn = document.querySelector('#submit-button');
const input = document.querySelector('#form-input');
const errorIcon = document.querySelector('#error_img');
const errorMessage = document.querySelector('#error_msg');

const emailValidation = () => {
    if (regex.test(input.value)) {
        input.classList.contains('main-form_input-error') ? input.classList.remove('main-form_input-error') : '';
        errorIcon.classList.contains('display') ? errorIcon.classList.remove('display') : '';
        errorMessage.classList.contains('display') ? errorMessage.classList.remove('display') : '';
    } else {
        !input.classList.contains('main-form_input-error') ? input.classList.add('main-form_input-error') : '';
        !errorIcon.classList.contains('display') ? errorIcon.classList.add('display') : '';
        !errorMessage.classList.contains('display') ? errorMessage.classList.add('display') : '';
    }
};

btn.addEventListener('click', () => {
    emailValidation();
})

input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        e.preventDefault();
        emailValidation();
    }
})