/*
1 найти текущий элемент
2 найти следующий соседний элемент
3 написать и вызвать метод удаления и добавления классов CSS
*/

class AdvElem {
    constructor(elem) {
        this.container = elem;
        this.currElement = this.container.querySelector('span:nth-child(1)');
        this.nextElement = this.currElement.nextElementSibling;
        this.startRotating();
    }

    startRotating() {
            setInterval( () => {
                if (this.nextElement) {
                    this.currElement.classList.remove('rotator__case_active');
                    this.nextElement.classList.add('rotator__case_active');
                    this.currElement = this.nextElement;
                    this.nextElement = this.nextElement.nextElementSibling;
                } else {
                    this.currElement.classList.remove('rotator__case_active');
                    this.currElement = this.container.querySelector('span:nth-child(1)');
                    this.currElement.classList.add('rotator__case_active');
                    this.nextElement = this.currElement.nextElementSibling;
                }
            }, 1000)
        }
}

new AdvElem(document.querySelector('.rotator'))

//теперь можно создать еще одну рекламную плашку
//new AdvElem(document.querySelector('.rotator1'))
