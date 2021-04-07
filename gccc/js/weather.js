// Dates Information
const day = new Date();
const todayNumber = day.getDay();

const weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";

/* 
    Weather API
*/
let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=14.64072&units=imperial&lon=-90.51327&exclude=hourly,daily&appid=300a54035f682f83ebf3aa7d44d398ba";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);
    

    alert(weatherData);
});
//---------------------------------------------------------------------------------------------------//