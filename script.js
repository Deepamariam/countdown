let time;
let countdown;
let resetcountdown;
let presentTime;
let stopbutton;
let output;
window.onload = function () {
    time = document.querySelector(".countdown");
    let startbutton = document.querySelector(".start-button");
    let resetbutton = document.querySelector(".reset-button");
    stopbutton = document.querySelector(".stop-button");
    output = document.querySelector(".output");

    startbutton.addEventListener('click', countingdown);
    resetbutton.addEventListener('click', resetting);
    stopbutton.addEventListener('click',stopTime);
}

function displaytime(second) {
    let min = Math.floor(second / 60);
    let sec = Math.floor(second % 60);
    output.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function endtime() {
    output.innerHTML = 'Time Out';
}

function countingdown() {
    if (document.querySelector(".input")) {
        let timesecond = document.querySelector(".input").value;
        resetcountdown = timesecond;
    }
    calculateTime(resetcountdown);
}


function resetting() {
    clearInterval(countdown);
    countingdown();
}

function calculateTime(time) {
    let currentTime = time;
    displaytime(time);
    countdown = setInterval(() => {
        currentTime--;
        displaytime(currentTime);
        if (currentTime <= 0) {
            endtime();
            clearInterval(countdown);
        }
    }, 1000);
}

function stopTime(){
    clearInterval(countdown);
    output.innerHTML = 'Countdown Stopped';   
}