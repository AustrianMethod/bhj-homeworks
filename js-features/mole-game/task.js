(() => {

const container = document.querySelector('.hole-game');
const holes = container.querySelectorAll('div');
const quantityKills = document.getElementById('dead');
const quantityMisses = document.getElementById('lost');

let kills = 0;
let misses = 0;

for (let elem of holes) {
    elem.onclick = () => {
        if(elem.classList.contains('hole_has-mole')) {
            kills++;
            quantityKills.textContent = kills;
        } else {
            misses++;
            quantityMisses.textContent = misses;
        }
    }
 }

 const winCheck = () => {
    if (kills === 5) {
        kills = 0;
        misses = 0;
        quantityKills.textContent = kills;
        quantityMisses.textContent = misses;
        alert('Победа!');
    } else if (misses === 5) {
        kills = 0;
        misses = 0;
        quantityKills.textContent = kills;
        quantityMisses.textContent = misses;
        alert('Вы проиграли!');
    }
} 

setInterval(winCheck, 100);

})();