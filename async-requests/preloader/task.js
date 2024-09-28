/*
1 найти изображение анимации загрузки document.querySelector('.loader')
2 повесить на него обработчик события загрузки запроса курса
*/

const animation = document.querySelector('.loader');
const items = document.getElementById('items');

const insertContent = (CharCode, Value) => {
    items.insertAdjacentHTML('afterend', 
        `<div class="item">
             <div class="item__code">
                    ${CharCode}
              </div>
              <div class="item__value">
                    ${Value}
              </div>
              <div class="item__currency">
                    руб.
              </div>
         </div>`);
}

window.onload = () => {
    const lastCurr = JSON.parse(localStorage.getItem('lastCurr'));
    for (const [CharCode, Value] of lastCurr) {
        insertContent(CharCode, Value);
    }
};

const xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.readyState  === 4) {
        animation.classList.toggle('loader_active');
        const currs = JSON.parse(xhr.responseText).response.Valute;
        const ArrToMem = [];
        for (const item in currs) {
            const {CharCode, Value} = currs[item];
            insertContent(CharCode, Value);
            ArrToMem.push([CharCode, Value]);
        }
        localStorage.setItem('lastCurr', JSON.stringify(ArrToMem));
    }
}




