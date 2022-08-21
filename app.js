const now = new Date();

function getTime(dateObject) {
    const formatTime = {
        hours: dateObject.getHours() % 12 || 12,
        minutes: dateObject.getMinutes().toString().padStart(2, "0"),
        seconds: dateObject.getSeconds().toString().padStart(2, "0"),
        amOrPm: dateObject.getHours() < 12 ? "AM" : "PM"
    };
    return `${formatTime.hours}:${formatTime.minutes}:${formatTime.seconds} ${formatTime.amOrPm}`;
}

function getDate(dateObject) {
    const weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const formatDate = {
        day: weekNames[dateObject.getUTCDay()],
        date: dateObject.getUTCDate(),
        month: monthNames[dateObject.getMonth()],
        year: dateObject.getFullYear(),
    };
    return `${formatDate.day}, ${formatDate.month} ${formatDate.date} ${formatDate.year}`;
}

document.getElementById("clock").innerHTML = getTime(now);
document.getElementById("date").innerHTML = getDate(now);

//let currentTime = setInterval(getTime(now), 1000);
//document.getElementById("clock").innerHTML = currentTime;
