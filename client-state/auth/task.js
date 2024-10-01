const form = document.getElementById( 'signin__form' );
const user = document.getElementById( 'user_id' );
const welcome = document.getElementById( 'welcome' );

window.onload = () => {
    if(localStorage.userId) {
        user.textContent = localStorage.userId; 
        welcome.classList.add('welcome_active');
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.onload = () => {
        if (JSON.parse(xhr.response).success !== false && localStorage.userId) {
            const {success, user_id} = JSON.parse(xhr.responseText);
            localStorage.userId = user_id;
            user.textContent = user_id;
            welcome.classList.add('welcome_active');
            form.reset();
        } else if (JSON.parse(xhr.response).success === false) {
            alert( 'Неверный логин/пароль' );
        }
      };
    xhr.onerror = () => {
        console.error('Ошибка сети');
    };
    xhr.send(formData);
})



