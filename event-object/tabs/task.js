/*
1. Найти общий блок для navigation and contents
2. Повесить обработчик событий на него
3. Определить на каком блоке в navigation произошло событие
4. Отобразить соответствующую страницу в contents 
*/

class Tabs {
    constructor(elem) {
        //получаем массивы названий вкладок и блоков с контентом
        this.allTabsNav = Array.from(elem.querySelectorAll('.tab'));
        this.allTabsCon = Array.from(elem.querySelectorAll('.tab__content'));
        elem.addEventListener('click', this.onClick.bind(this));
    }
    
    onClick(event) {
        const link = event.target.classList;
        if(link.contains('tab') && !link.contains('tab_active')) {

            //сбрасываем начальные значения классов CSS
            for (let e of this.allTabsNav) {
                e.className = 'tab';
            }
            for (let e of this.allTabsCon) {
                e.className = 'tab__content';
            }

            //включаем активную вкладку и подтягиваем контент
            link.add('tab_active');
            const ind = this.allTabsNav.findIndex((e) => e.classList.contains('tab_active'));
            this.allTabsCon[ind].classList.add('tab__content_active');
        }
    }
}

const tabs1 = new Tabs(document.getElementById('tabs1'));