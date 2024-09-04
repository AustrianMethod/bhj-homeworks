/*Основная задача*/
const incTimer = function() {
    const timer = document.getElementById("timer");
    timer.textContent--;
    if (timer.textContent === '0') {
                clearInterval(intervalTimer);
// закачка файла по завершению таймера
                location.href = 'https://speedtest.selectel.ru/10MB' 
                alert("Вы победили в конкурсе!");
    }
}


/*Повышенный уровень сложности #1*/
/*Конвертируем время из секунд в формат ЧЧ:ММ:СС*/

// (function convertTime() {
//     const timer = document.getElementById("timer");
//     let timerVal = timer.textContent;

//     const hours = Math.floor(timerVal / 3600);
//     const minutes = Math.floor((timerVal % 3600) / 60);
//     const secs = timerVal % 60;
    
//     const formattedHours = String(hours).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(secs).padStart(2, '0');

//     timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// })();


// /*Ведем отсчет времени*/
// const incTimer = function() {

//     const timer = document.getElementById("timer");
//     let [hrs, min, sec] = timer.textContent.split(":").map(elem => +elem);
    
//     if (sec === 0 && min < 60 && min > 0) {
//         min--;
//         sec = 59;
//     } else if (min === 0 && hrs < 99 && hrs > 0) {
//         hrs--;
//         min = 59;
//     } else if (sec < 60 && sec > 0) {
//         sec--;
//     } 

//     let formattedHours = hrs.toString().padStart(2, '0');
//     let formattedMinutes = min.toString().padStart(2, '0');
//     let formattedSeconds = sec.toString().padStart(2, '0');
//     timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

//     if (timer.textContent === '00:00:00') {
//         clearInterval(intervalTimer);
//         alert("Вы победили в конкурсе!");
//         // закачка файла по завершению таймера
//         location.href = 'https://speedtest.selectel.ru/10MB' 
//     }

//  }

// let intervalTimer = setInterval(incTimer, 100);
