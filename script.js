//display sections in html
const hour = document.querySelector('#hour');
hour.innerText = '00:';

const minute = document.querySelector('#minute');
minute.innerText = '00:'

const second = document.querySelector('#second');
second.innerText = '00'

//start stop and restart buttons
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const restartButton = document.querySelector('#restart');

let secondsCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

let seconds;

let isTimerRunning = false;

function startTimer(){

    if(!isTimerRunning){

        isTimerRunning = true;

        seconds = setInterval(() => {
            secondsCounter++;
        
            second.innerText = secondsCounter
                if(secondsCounter < 10){
                    second.innerText = '0' + secondsCounter
                }
                // console.log(secondsCounter)
        
                if(secondsCounter == 60){
                    secondsCounter = 0;
                    minuteCounter++;             
                }

                if(minuteCounter < 10){
                    minute.innerText = '0' + minuteCounter + ':'
                } else{
                    minute.innerText =  minuteCounter + ':'
                }

                if(minuteCounter == 60){
                    minuteCounter = 0;
                    hourCounter++;
                    hour.innerText =  hourCounter + ':'
                }
        }, 1000);
    }
    
}


function stopTimer(){
    clearInterval(seconds)
    isTimerRunning = false;
}

function restartTimer(){
    stopTimer();
    hour.innerText = '00:';
    minute.innerText = '00:'
    second.innerText = '00'

    secondsCounter = 0;
    minuteCounter = 0;
    hourCounter = 0;
}

/******STOP WATCH******/




//start stop and restart buttons
const startButtonS = document.querySelector('#start1');
const stopButtonS = document.querySelector('#stop1');
const restartButtonS = document.querySelector('#restart1');

const formValidate = document.querySelector('#maxRange')

let hasTimerStarted = false;

startButtonS.addEventListener('click', ()=>{
    if(!hasTimerStarted){

        const hourS = document.querySelector('#hourInput').value;

        const minuteS = document.querySelector('#minuteInput').value;

        const secondS = document.querySelector('#secondInput').value;

        hasTimerStarted = true;

        console.log(hourS)
        console.log(minuteS)
        console.log(secondS)

        if(secondS > 60){
            
        } else{

        }

    }
})