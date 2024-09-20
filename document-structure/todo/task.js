const form = document.querySelector('.tasks__control');
const tasksList = document.querySelector('.tasks__list');
const tasksInput = document.querySelector('.tasks__input');
const arrStor = [];
console.log(localStorage.item)
localStorage.removeItem('item')
JSON.parse(localStorage.getItem('item'))?.forEach(e => {
    arrStor.push(e);
});

/*функция вставки элемента*/
function insertElem(e) {
    tasksList.insertAdjacentHTML('beforeEnd',`<div class="task">
        <div class="task__title">${e}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
}

/*функция обновления локального хранилища*/
function updStorage() {
    localStorage.setItem('item', JSON.stringify(arrStor));
    }

/*добавляем элементы сохраненые в хранилище после загрузки всей страницы (window.onload)*/
window.onload = event => {
    event.preventDefault();
    const arrFromStorage = JSON.parse(localStorage.getItem('item')); 
    if (arrFromStorage?.length) {
        for (let elem of arrFromStorage) {
            insertElem(elem);
        }
    }
}

/*добавляем элементы по нажатию кнопки/клавиши enter*/
form.addEventListener('submit', event => {
    event.preventDefault();
    if (tasksInput.value !== '') {
        insertElem(tasksInput.value);
        arrStor.push(tasksInput.value);
        updStorage();
    }
    form.reset();
});

/*удаляем пункты списка по нажатию на крестик*/
tasksList.addEventListener('click', event => {
    if(event.target.classList.contains("task__remove")) {
        const text = event.target.closest('.task').firstElementChild.textContent;
        arrStor.splice(arrStor.findIndex(e => e === text) , 1);
        event.target.closest('.task').remove();
        updStorage();
    }
});

