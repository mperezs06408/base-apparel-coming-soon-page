const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const btn = document.querySelector('#submit-button');
const input = document.querySelector('#form-input');
const errorIcon = document.querySelector('#error_img');
const errorMessage = document.querySelector('#error_msg');

const emailValidation = () => {
    if (regex.test(input.value)) {
        input.classList.contains('main-form_input-error') ? input.classList.remove('main-form_input-error') : console.log('Input ok');
        errorIcon.classList.contains('display') ? errorIcon.classList.remove('display') : console.log('Recursive error');
        errorMessage.classList.contains('display') ? errorMessage.classList.remove('display') : console.log('Recursive error');
    } else {
        !input.classList.contains('main-form_input-error') ? input.classList.add('main-form_input-error') : console.log('Recursive error');
        !errorIcon.classList.contains('display') ? errorIcon.classList.add('display') : console.log('Recursive error');
        !errorMessage.classList.contains('display') ? errorMessage.classList.add('display') : console.log('Recursive error');
    }
};

btn.addEventListener('click', () => {
    emailValidation();
})