
const body = document.querySelector('body');

body.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.classList.contains('has-tooltip')) {

        if(!event.target.nextElementSibling?.classList.contains('tooltip')) {
            const goalSize = event.target.getBoundingClientRect();
            event.target.insertAdjacentHTML('afterEnd',`<div class="tooltip">${event.target.title}</div>`);
            document.querySelector('.tooltip').style.left = goalSize.left + 'px';
            document.querySelector('.tooltip').style.top = goalSize.top + goalSize.height + 'px';
        }

        const tip = document.querySelector('.tooltip'); 
        if(!tip.classList.contains('tooltip_active')) {
            tip.classList.add('tooltip_active');
        } else {
            tip.remove();
        }
    }
})