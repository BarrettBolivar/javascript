var HOUR = 7;
var MINUTE = 35;
var PERIOD = "PM";

function time (){
    if (PERIOD === "AM") {
        PERIOD = "in the morning."
    }
    if (PERIOD === "PM") {
        PERIOD = "in the evening."
    }
    if (MINUTE > 30)
        HOUR ++;
        console.log("It's almost " + HOUR + " " + PERIOD);
    if (MINUTE < 30)
        console.log("It's just after" + HOUR + " " + PERIOD);
}
time();