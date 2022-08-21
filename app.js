let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

const weekdayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

let day = weekdayNames[now.getUTCDay()];
let date = now.getUTCDate();
let month = monthNames[now.getMonth()]
let year = now.getFullYear();

function clock () {
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`
}

document.setInterval(clock, 1000)










document.getElementById("date").innerHTML = "This is where the date while go."