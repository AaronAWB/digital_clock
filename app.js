function displayClock () {
    const currentTime = new Date();

    const hours = currentTime.getHours() % 12 || 12;
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    let amOrPm = "AM";

    if (currentTime.getHours() >= 12) {
        amOrPm = "PM";
    }

    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds} ${amOrPm}`;
}

function displayDate () {
    const currentDate = new Date();

    const weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const monthNames = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const day = weekNames[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
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

    document.getElementById("date").innerHTML = `${day}, ${month} ${date}${ordinal} ${year}`;
}
       
displayClock();
displayDate();

setInterval(displayClock, 1000);
setInterval(displayDate, 1000);




