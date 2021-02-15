let temperature = parseFloat(document.getElementById("temperature").innerText);
let windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

if (temperature <= 50 && windSpeed > 3) {
    let windChill =         
    Math.round(35.74 + 
                (0.6215 * temperature) -
                (35.75 * Math.pow(windSpeed, 0.16)) +
                (0.4275 * temperature * Math.pow(windSpeed, 0.16)),
                2);                  
    document.getElementById("windChill").innerText = windChill + " °F";                                            
} else {
    document.getElementById("windChill").innerText = "N/A";
} 