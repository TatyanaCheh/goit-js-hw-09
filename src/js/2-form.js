//Ключ для збереження даних  у lokal
const STORAGE_KEY = 'feedback-form-state';


const formRefs = document.querySelector('.feedback-form');
const formInput = document.querySelector('input[name="email"]');
const formMessage = document.querySelector('textarea[name="message"]');

//об'єкт для збереження даних форми
const formData = { 
    email: '', 
    message: '',
};

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//f для отримання данних з localStorage
const loadFromLS = key => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};
// оновлення значень полів форми
const updateForm = () => {
    formInput.value = formData.email;
    formMessage.value = formData.message;
};

// відстеження події input на формі
formRefs.addEventListener('input', event => {
    const {name, value} = event.target;
    formData[name] = value.trim();
    saveToLocalStorage(STORAGE_KEY, formData);
});


// завантаження даних з LS при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const saveData = loadFromLS(STORAGE_KEY);
    if(saveData) {
        formData.email = saveData.email || '';
        formData.message = saveData.message || '';
        updateForm();
    }
});

formRefs.addEventListener('submit', event => {
    event.preventDefault();
    if(!formData.email || !formData.message) {
        alert('Fill please all fields');
    return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    formRefs.requestFullscreen();

});