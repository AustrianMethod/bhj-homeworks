/*
1 найти родителя переключателей
2 повесить на него обработчик событий
3 при клике добавить *font-size_active* в event.target
4 сделать проверку event.target.classList на размер шрифта по классу
5 добавить соответствующий класс в блок с классом book (book_fs-big или book_fs-small)
*/

const buttons = document.querySelector('.book__control');

buttons.onclick = (e) => {
    e.preventDefault();
    const children = [...buttons.children];
    const book = document.querySelector('.book');

    if(!e.target.classList.contains('font-size_active')) {

        children.map(el => el.classList.remove('font-size_active'));
        e.target.classList.add('font-size_active');

        if(e.target.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if(e.target.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    }
}
