let hours=0;        //variable to store hours
let minutes=0;      //variable to store minutes
let seconds=0;      //variable to store seconds
let mills=0;        //variable to store milliseconsds
let id=null;         //variable to store an interval ID
let timer=document.getElementById('timer');     // variable to store the timer element
let start=document.getElementById('start');     //variable for start button element
let pause=document.getElementById('pause');     //variable for pause button element
let reset=document.getElementById('reset');     //variable for reset button element
//start event listener
start.addEventListener('click',function(){
    console.log("start clicked");
    //starting the timer and run the 'runTimer' function repeatedly and save the interval id int the variable 
    id=setInterval(runTimer,10);
    //disable start and enable pause on click
    start.setAttribute('disabled',true);
    pause.disabled=false;
})
//pause event listener
pause.addEventListener('click',function(){
    console.log('pause clicked');
    //Clear the interval and pause the timer
    clearInterval(id);
    //enable start and disable pause on click
    start.disabled=false;
    pause.setAttribute('disabled',true);
})
//reset event listener
reset.addEventListener('click',function(){
    
    console.log('reset clicked');
    //clears the interval
    clearInterval(id);
    //update the timer display to zeros
    timer.innerHTML="00 : 00 : 00: 000";
    //make the all timer variables to 0
    hours=0;
    minutes=0;
    seconds=0;
    mills=0;
    //enable start and pause on reset
    start.disabled=false;
    pause.disabled=false;
})
function runTimer(){
    mills+=10;
    if(mills == 1000){
        //if mills is 1000 reset mills to 0 and increment the seconds
        mills = 0;
        seconds++;
        if(seconds == 60){
        //if seconds is 60 reset seconds to 0 and increment the minutes
            seconds = 0;
            minutes++;
            if(minutes == 60){
        //if minutes is 60 reset minutes to 0 and increment the hours
                minutes = 0;
                hours++;
            }
        }
    }
    //to ensure that the hours is two digits
    let h = hours < 10 ? "0" + hours : hours;
    //to ensure that the minutes is two digits
    let m = minutes < 10 ? "0" + minutes : minutes;
    //to ensure that the seconds is two digits
    let s = seconds < 10 ? "0" + seconds : seconds;
    //to ensure that the mills is three digits 
    let ms = mills < 10 ? "00" + mills : mills < 100 ? "0" + mills : mills;
    timer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}