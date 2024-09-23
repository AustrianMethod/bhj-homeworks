
const body = document.querySelector('body');

body.addEventListener('click', event => {
    event.preventDefault();

    /*проверяем был ли клик на том же самом элементе*/
    if (event.target.nextElementSibling?.classList.contains('tooltip')) {
        document.querySelector('.tooltip').classList.toggle('tooltip_active'); 

    /*проверяем был ли клик на ссылке с подсказкой*/    
    } else if (event.target.classList.contains('has-tooltip')) {
        
    /*проверяем есть на странице подсказки*/       
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }

    /*создаем новую*/     
        const goalSize = event.target.getBoundingClientRect();
        event.target.insertAdjacentHTML('afterEnd',`<div class="tooltip">${event.target.title}</div>`);
        const tip = document.querySelector('.tooltip');
        tip.classList.add('tooltip_active')
        tip.style.left = goalSize.left + 'px';
        tip.style.top = goalSize.top + goalSize.height + 'px';
    }
})