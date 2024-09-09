/*1. Получить родителя кнопки и списка
  2. Повесить на него обработчик событий с помощью делегирования
  3. Если это кнопка открытия списка с названием языка одна логика,
  при открытом списке другая
*/

class Button {
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
        this.container = elem;
        this.dv = this.container.querySelector('.dropdown__value');
        this.dl = this.container.querySelector('.dropdown__list');
    }

    onClick(event) {
        if(event.target.classList.contains('dropdown__value')) {
            if(this.dl.classList.contains('dropdown__list_active')) {
                this.dl.classList.remove('dropdown__list_active');
            } else { 
                this.dl.classList.add('dropdown__list_active');
            }
        }

        if(event.target.classList.contains('dropdown__link')) {
            event.preventDefault();
            this.dv.textContent = event.target.textContent;
            this.dl.classList.remove('dropdown__list_active');
        }
    }
} 

new Button(document.querySelector('.dropdown'));

//Создаем доп кнопку, отредактировав CSS и HTML 
//new Button(document.querySelector('.ndropdown'));

