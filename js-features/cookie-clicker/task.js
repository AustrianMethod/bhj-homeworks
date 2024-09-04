const clickerFunc = function() {
        let clickCount = 0;
        let lastClickTime = 0;
        let totalTimeBetweenClicks = 0;

        const counter = document.getElementById("clicker__counter");
        const image = document.getElementById("cookie");

//Создание и вставка строчки Скорость клика: 0

        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span');
        newDiv.textContent = "Скорость клика:";
        newSpan.textContent = " 0";
        const container = document.querySelector('.clicker');
        const refElement = document.querySelector('.clicker__cookie');
        newDiv.appendChild(newSpan);
      
        container.insertBefore(newDiv, refElement);

//Подсчет кликов

        image.onclick = () => {
            clickCount++; 
            const currTime = new Date();
            if (lastClickTime !== 0) {
                const timeBetweenClicks = currTime - lastClickTime;
                totalTimeBetweenClicks += timeBetweenClicks;
                const clickSpeed = (clickCount/(totalTimeBetweenClicks/1000)).toFixed(2);
                newSpan.textContent = " " + clickSpeed;
            }
            lastClickTime = currTime;

            counter.textContent++;
            if(clickCount%2 === 0) {
                image.width = 250;
                image.height = 178;
            } else {
                image.width = 200;
                image.height = 128;
            }
        }
}

clickerFunc();