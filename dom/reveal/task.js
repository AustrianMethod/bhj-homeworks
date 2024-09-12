/*
1 найти все блоки с классом reveal
2 повесить обработчик событий на родителя body
3 при скролле вниз должен срабатывать обработчик - если
 getBoundingClientRect().bottom > 0 и window.innerHeight > getBoundingClientRect().top, 
 добавить в classList класс reveal_active в противном случае удалить
4 проверку осуществлять в цикле 
*/

const scrollBlocks = Array.from(document.querySelectorAll('.reveal'));
const body = document.querySelector('body')

window.addEventListener('scroll', () => {
    for(elem of scrollBlocks) {
        let bottom = elem.getBoundingClientRect().bottom;
        let top = elem.getBoundingClientRect().top;
        let wheight = window.innerHeight;
        let elist = elem.classList;

        if(bottom > 0 && wheight > top && !elist.contains('reveal_active')) {
                elist.add('reveal_active');
            } 
        else if (elist.contains('reveal_active') && (wheight < top || bottom < 0)) {
                elist.remove('reveal_active'); 
            }
        }

})

 