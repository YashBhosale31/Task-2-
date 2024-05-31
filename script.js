var time = 0;
var interval;
var display = document.getElementById("display");
var altBtns = document.getElementById("alt-btns");
var reset = document.getElementById("reset");

altBtns.addEventListener("click", function() {
    if (interval) {
        clearInterval(interval);
        altBtns.textContent = "Start";
    } else {
        interval = setInterval(updateTime, 10);
        altBtns.textContent = "Pause";
    }
});

reset.addEventListener("click", function() {
    clearInterval(interval);
    time = 0;
    display.textContent = "00:00:00";
    altBtns.textContent = "Start";
});

function updateTime() {
    time++;
    var hrs = Math.floor(time / 3600000);
    var mins = Math.floor((time % 3600000) / 60000);
    var secs = Math.floor((time % 60000) / 1000);
    var ms = time % 1000;
    display.textContent = `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`;
}