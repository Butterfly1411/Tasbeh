const circlePattern = document.getElementsByClassName('pattern'),
    duoBtn = document.getElementById('duo-btn'),
    resetBtn = document.getElementsByClassName('reset-btn'),
    counter = document.getElementsByClassName('counter'),
    countx = document.getElementById('countx');

let rotation = 0;
let clickCount = 0;

duoBtn.addEventListener('click', () => {
    rotation += 360;
    circlePattern[0].style.transform = `rotate(${rotation}deg)`


    let currentCounter = parseInt(counter[0].textContent) || 0;
    currentCounter++;

    let currentCountx = parseInt(countx.textContent) || 0;


    if (currentCounter >= 33) {
        let countnum = Math.floor(currentCounter / 33); // nechta 33 borligini topish
        currentCountx += countnum; // shuncha marta zikr bo‘lgan
        countx.textContent = currentCountx;

        currentCounter = currentCounter % 33;
    }
    counter[0].textContent = currentCounter;
});


resetBtn[0].addEventListener('click', () => {
    clickCount = 0;
    counter[0].textContent = 0;
    countx.textContent = 0;
    rotation = 0;
    circlePattern[0].style.transform = `rotate(0deg)`;
});