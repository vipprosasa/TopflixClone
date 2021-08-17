function updateTime(){
    var eventTime = new Date("2021, 7, 30, 20:42:20");
    var currentTime = new Date();
    var remainTime = new Date(eventTime - currentTime);
    var days = remainTime.getDay();
    var hours = remainTime.getHours();
    var minutes = remainTime.getMinutes();
    var seconds = remainTime.getSeconds();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(updateTime, 1000);