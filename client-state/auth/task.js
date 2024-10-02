const form = document.getElementById( 'signin__form' );
const signIn = document.getElementById( 'signin' ); 
const signOutBtn = document.getElementById( 'signout__btn' ); 
const user = document.getElementById( 'user_id' );
const welcome = document.getElementById( 'welcome' );

window.onload = () => {
    signOutBtn.style.display = 'none';
    if( localStorage.getItem('userId') !== null ) {
        user.textContent = localStorage.getItem('userId');
        signIn.classList.remove('signin_active'); 
        welcome.classList.add('welcome_active');
        signOutBtn.style.display = 'block';
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.onload = () => {
        if ( xhr.response.success !== false ) {
            signIn.classList.remove( 'signin_active' );
            signOutBtn.style.display = 'block';
            const { success, user_id } = xhr.response;
            localStorage.setItem( 'userId', user_id );
            user.textContent = user_id;
            welcome.classList.add( 'welcome_active' );
            form.reset();
        } else if ( xhr.response.success === false ) {
            alert( 'Неверный логин/пароль' );
        }
      };
    xhr.onerror = () => {
        console.error( 'Ошибка сети' );
    };
    xhr.responseType = 'json';
    xhr.send(formData);
})

signOutBtn.onclick = () => {
    localStorage.removeItem( 'userId' );
    welcome.classList.remove( 'welcome_active' );
    signOutBtn.style.display = 'none';
    signIn.classList.add( 'signin_active' );
}

