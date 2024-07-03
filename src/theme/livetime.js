var day = new Date().getDate();
var time = new Date().getTime();
var second = new Date().getSeconds();
var minute = new Date().getMinutes();
var hour = new Date().getHours();

document.getElementById('day').innerHTML = "Current day: " + day;
document.getElementById('unix').innerHTML = time;
document.getElementById('second').innerHTML = "Current second: " + second;
document.getElementById('minute').innerHTML = "Current minute: " + minute;
document.getElementById('hour').innerHTML = "Current hour: " + hour;
