let [hours, minutes, second] = [0, 0, 0];
let displayTimer = document.querySelector('#mainWatch');
let timer = null;

// Stop Watch Function

function stopWatch() {
    second++;
    if (second / 60 === 1) {
        second = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    displayTimer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (second > 9 ? second : "0" + second);
}

// Start Button

document.querySelector('#start').addEventListener('click', () => {
    if (timer === null) {
        timer = setInterval(stopWatch, 1000);
    }
});

// Stop Button

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

// Reset Button

document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    [hours, minutes, second] = [0, 0, 0];
    displayTimer.textContent = "00:00:00";
});
