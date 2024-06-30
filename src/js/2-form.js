//Ключ для збереження даних  у lokal
const STORAGE_KEY = 'feedback-form-state';


const formRefs = document.querySelector('.feedback-form');
const formInput = document.querySelector('input[type="email"]');
const formMessage = document.querySelector('textarea[name="message"]');

//об'єкт для збереження даних форми
const formData = { 
    email: '', 
    message: '',
};

// відстеження події input на формі
formRefs.addEventListener('input', () => {
    const email = formInput.value.trim();
    const message = formMessage.value.trim();
    const formData = { email, message };
    saveToLocalStorage(STORAGE_KEY, formData);
});


// завантаження даних з LS при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(STORAGE_KEY);
    formInput.value = data?.email || '';
    formMessage.value = data?.message || '';
});

formRefs.addEventListener('submit', event => {
    event.preventDefault();
    const email = formInput.value.trim();
    const message = formMessage.value.trim();
    if(email !== '' && message !=='') {
        const formData = {  email, message};
        console.log(formData);
        formRefs.reset();
        localStorage.removeItem(STORAGE_KEY);
    }else {
        alert('Fill please all fields');
    }
    });
    function saveToLocalStorage(key, value) {
        const jsonData = JSON.stringify(value);
        localStorage.setItem(key, jsonData);
    }
     function loadFromLS(key) {
        const json = localStorage.getItem(key);
        try {
            const data = JSON.parse(json);
            return data;
        } catch {
            return json;
        }
        
    };

    
