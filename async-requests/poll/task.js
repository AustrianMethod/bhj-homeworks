const pollTitle = document.getElementById( 'poll__title' );
const pollAnswers = document.getElementById( 'poll__answers' );

 /*
обработчик клика на один из предложенных вариантов
*/
pollAnswers.addEventListener( 'click', event => {
    if(event.target.classList.contains( 'poll__answer' )) {
        alert( 'Спасибо, ваш голос засчитан!' );
        /*
        можно было бы использовать innerHTML вместо
        pollAnswers.style.visibility = "hidden" внутри обработчика POST запроса,
        но такой вариант не самый надежный (XSS)
        */
        pollAnswers.style.visibility = "hidden";

        const answers = JSON.parse( xhr.responseText ).data.answers;
        const answer =  answers.indexOf(event.target.textContent.trim());
        const id = JSON.parse( xhr.responseText ).id;

        /*
        POST запрос на сервер, извлечение данных
        из ответа сервера по статистике и отображение ее на странице
        */
        const newXhr = new XMLHttpRequest();
        newXhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
        newXhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        newXhr.send( `vote=${id}&answer=${answer}` );
        newXhr.onreadystatechange = () => {
            if ( newXhr.readyState === 4 ) {
                const stats = JSON.parse(newXhr.responseText).stat;
                for ( const {answer, votes} of stats ) {
                    pollAnswers.insertAdjacentHTML('afterend', `<div>${answer}: ${votes}</div>`);
                }
            }
        }
    }
});

 /*
создание GET запроса на сервер для получения случайного вопроса с вариантами ответа
*/
const xhr = new XMLHttpRequest();
xhr.open( 'GET', 'https://students.netoservices.ru/nestjs-backend/poll' );
xhr.send();
xhr.onreadystatechange = () => {
    if ( xhr.readyState === 4 ) {
        const poll = JSON.parse( xhr.responseText ).data;
        pollTitle.textContent = poll.title;
        for( const option of poll.answers ) {
            pollAnswers.insertAdjacentHTML( 'beforeEnd', `
                <button class="poll__answer">
                    ${ option }
                </button>
            `);
        }
    }
}