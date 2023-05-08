
const feedBackForm = document.querySelector('.feedback-form');
/* const input = document.querySelector('input');
const textArr = document.querySelector('textarea');
const button = document.querySelector('button'); */

const FORM_iNF = "feedback-form-state";

feedBackForm.addEventListener('input', onFormInp);
window.addEventListener('load', loadCheck);
feedBackForm.addEventListener('submit', onFormSub);


function onFormInp() {
    const formData = {
        email: feedBackForm.email.value,
        message: feedBackForm.message.value,
    };
    localStorage.setItem(FORM_iNF, JSON.stringify(formData))
    
}


function loadCheck() {
    const formData = JSON.parse(localStorage.getItem(FORM_iNF));
    if (formData) {
        feedBackForm.email.value = formData.email;
        feedBackForm.message.value = formData.message;
    }
}

function onFormSub(evt) {
    evt.preventDefault();
     const formData = {
        email: feedBackForm.email.value,
        message: feedBackForm.message.value,
     };
    
    localStorage.removeItem(FORM_iNF);
    feedBackForm.email.value = '';
    feedBackForm.message.value = '';

    console.log(formData)
}