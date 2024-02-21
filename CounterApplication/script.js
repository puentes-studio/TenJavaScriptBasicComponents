document.getElementById("incrementButton").addEventListener("click",incrementCounter);

document.getElementById("decrementButton").addEventListener("click",decrementCounter);

document.getElementById("resetButton").addEventListener("click",resetCounter);

let counterDispay = document.getElementById("counterDisplay");
let counterValue = 0;

function updateCounterDisplay () {
    counterDispay.textContent = counterValue;
}


function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
}

function decrementCounter() {
    if(counterValue>0) {
        counterValue--;
        updateCounterDisplay();
    }
}

function resetCounter() {
    counterValue = 0;
    updateCounterDisplay()
}