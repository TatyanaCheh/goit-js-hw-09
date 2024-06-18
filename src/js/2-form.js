const STORAGE_KEY = 'feedback-form-state';

const formRefs = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const { email, message} = formRefs.elements;

formRefs.addEventListener("submit", onSubmitForm)
formRefs.addEventListener("input", onInputForm);
if (formData) {
    email.value = formData.email || "";
    message.value = formData.messag || "";
}

function onSubmitForm (event) {
    event.preventDefault();
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields");
        return;
    }
    localStorage.removeItem(STORAGE_KEY);
    event.target.reset();
    console.log(formData);
    formData = {};
};
function onInputForm(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};