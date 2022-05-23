var sec = 0;
var min = 0;
var hour = 0;
var start_second = "";
var start_min = "";
var start_hour = "";
var now_Time;
var btn = false;

var start_timer = document.getElementById("Timer");

function start(){
    btn = true;
    time();
    now_Time = setTimeout(start, 10);
}

function stop(){
    btn = false;
    clearTimeout(now_Time);
}

function reset(){
    if (btn == false){
        clearTimeout(now_Time);
        sec = 0;
        min = 0;
        hour = 0;
        start_timer.innerHTML = "00 : 00 : 00";
    }
}

function time(){
    sec++;
    if (sec >= 60){
        sec = 0;
        min++;
        if (min >= 10){
            mTen = 1;
        }
        else{
            mTen = 0;
        }
    }
    if (min >= 60){
        min = 0;
        hour++;
    }
    if (sec < 10){
        start_second ="0" + sec;
    }
    else{
        start_second = sec;
    }
    if (min < 10){
        start_min = "0" + min;
    }
    else{
        start_min = min;
    }
    if (hour < 10){
        start_hour = "0" + hour;
    }
    else{
        start_hour = hour;
    }

    start_timer.innerHTML = start_hour +" : "+ start_min +" : "+ start_second;
}