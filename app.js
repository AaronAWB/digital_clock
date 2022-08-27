function displayClock () {
    const currentTime = new Date();

    const militaryHours = currentTime.getHours();
    const standardHours = currentTime.getHours().toString() % 12 || 12;
    const formattedHours = standardHours.toString().padStart(2, "0")
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getSeconds().toString().padStart(2, "0");
    const amOrPm = militaryHours < 12 ? "AM" : "PM";

    const clockDisplay = document.getElementById("clock")
    clockDisplay.textContent = `${formattedHours}:${minutes}:${seconds} ${amOrPm}`;
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
    const ordinal = getOrdinal(date);

    const dateDisplay= document.getElementById("date");
    dateDisplay.innerHTML = `${day}, ${month} ${date}${ordinal} ${year}`;
}

function getOrdinal (date) {
    if (date > 20 || date < 10) {
        switch (date % 10) {
            case 1: 
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
    }
    return "th";
}
}
       
displayClock();
displayDate();

function getTime () {
    displayClock();
    displayDate();
}

setInterval(getTime, 1000);
