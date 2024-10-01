
// deleteCookie('click');

const popup = document.querySelector( '.modal' );
if( !getCookie('click') ) {
        popup.classList.add('modal_active');
    }
    

popup.onclick = e => {
    if( e.target.classList.contains( 'modal__close' ) ) {
        popup.classList.remove( 'modal_active' );
        setCookie('click', 'itWas');
    }
}








// getCookie(), setCookie(), deleteCookie()


// возвращает cookie если есть или undefined
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// уcтанавливает cookie
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }



// удаляет cookie
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }
