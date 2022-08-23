const now = new Date();

const hours = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
let amOrPm = "AM";

if (now.getHours() >= 12) {
    amOrPm = "PM";
}

const weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const monthNames = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

const day = weekNames[now.getDay()];
const date = now.getDate();
const month = monthNames[now.getMonth()];
const year = now.getFullYear();
let ordinal;

if (date == 1 || date == 21 || date == 31) {
    ordinal = "st";
} else if (date == 2 || date == 22) {
    ordinal = "nd";
} else if (date == 3 || date == 23) {
    ordinal = "rd";
} else {
    ordinal = "th";
}

function displayTime () {
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

function displayDate () {
    document.getElementById("date").innerHTML = `${day}, ${month} ${date}${ordinal} ${year}`;
}
        
displayTime(now);
displayDate(now);

setInterval(displayTime, 1000);
setInterval(displayDate, 1000);




