var valueToCountdown;
var intervals;
var tmr = document.getElementById("timer");

function startCountdownTimer(){
    valueToCountdown = document.getElementById("inputTimer").value;
    tmr.innerHTML = 'ready... set... go!';
    intervals = window.setInterval(updateTimer, 1000);
}

function updateTimer(){
     //s.style.color = s.style.color === 'red' ? 'blue' : 'red';
    if(valueToCountdown>0){
        tmr.innerHTML = valueToCountdown;
        valueToCountdown--;
    }else{
        window.clearInterval(intervals);
        tmr.innerHTML = 'KABOOM!!!';
        document.getElementById("inputTimer").value = '';
    }
}




