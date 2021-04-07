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

    {
        "id": 3598132,
        "name": "Guatemala City",
        "state": "",
        "country": "GT",
        "coord": {
            "lon": -90.513268,
            "lat": 14.64072
        }
    }
*/
let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3598132&units=imperial&appid=300a54035f682f83ebf3aa7d44d398ba";

// Loading JSON to an Object
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);
    const weatherList = weatherData.list;
    let currentState = weatherList[0].weather[0].description;
    let temperature = Math.round(weatherList[0].main.temp * 10)/10;
    let windSpeed = Math.round(weatherList[0].wind.speed * 10)/10;
    let humidity = weatherList[0].main.humidity;

    // Setting Summary Weather
    document.querySelector("#currentState").textContent = currentState;
    document.querySelector("#temperature").textContent = temperature + " °F";
    document.querySelector("#humidity").textContent = humidity + " %";
    document.querySelector("#windSpeed").textContent = windSpeed + " mi/h";

    // Loop for procesing days
    let counter = 0;
    let currentDay = todayNumber;
    for (let i = 0; i < weatherList.length; i++) {
        let hour = weatherList[i].dt_txt;

        // At 6 P.M.
        if (hour.includes("18:00:00")) {

            currentDay++;
            counter++;

            if (counter <= 3) {
                if (currentDay == 7) {
                    currentDay = 0;
                }
                
                let forestDay = document.createElement("div");
                forestDay.setAttribute("class", "divDay"); 

                let span1 = document.createElement("span");
                span1.setAttribute("class", "day"); 
                span1.textContent = weekDay[currentDay];
                forestDay.appendChild(span1); 

                let iconType = weatherList[i].weather[0].icon;
                let iconPath = "https://openweathermap.org/img/w/" + iconType + ".png";            
                let picture = document.createElement("img");
                picture.setAttribute("src", iconPath);
                picture.setAttribute("alt", "Weather for " + weekDay[currentDay]);
                picture.setAttribute("class", "weatherState");
                forestDay.appendChild(picture); 

                let span2 = document.createElement("span");
                span2.setAttribute("class", "pDay"); 
                let temp = Math.round(weatherList[i].main.temp * 10)/10;
                span2.textContent = temp + " °F";
                forestDay.appendChild(span2);             
                
                document.querySelector("#forestDiv").appendChild(forestDay);            
            }            
        }
    }
    
});

//---------------------------------------------------------------------------------------------------//