// date formatting

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var millisecond = date.getMilliseconds();
var time = date.getTime();

console.log(day + "/" + month + "/" + year);
console.log(hour + ":" + minute + ":" + second + ":" + millisecond);
console.log(time);

