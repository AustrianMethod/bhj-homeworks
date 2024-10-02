/*
1 повесить обработчик события на window который 
по событию загрузки страницы восстанавливает содержимое
из хранилища

2 повесить обработчик события на textarea с вводом
нового символа обновлять хранилище localStorage
*/

const text = document.getElementById('editor');
const btn = document.querySelector('.clear');

window.onload = () => {
    text.value = localStorage.getItem('textFromArea');
}

text.oninput = () => {
    localStorage.setItem('textFromArea', text.value.trim());
}

btn.onclick = () => {
    text.value = '';
    localStorage.removeItem('textFromArea');
}

