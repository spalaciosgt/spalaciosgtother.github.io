window.onload = function() {
    
    // Web Font Load
    WebFont.load({
        google: {
            families: ["Montserrat"]
        }
    });

    // Current date at footer
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    document.getElementById('copyrightYear').innerText = year;
    document.getElementById('lastUpdated').innerText = 
    "Last Updated " + currentDate.toLocaleDateString() + " " + 
    currentDate.toLocaleTimeString();     

    // Message if today is Friday
    let currentDay = currentDate.getDay();
    if (currentDay != 5) {
        document.getElementById("messageJS").classList.toggle("hide");
    } else {
        document.getElementById("messageJS").classList.toggle("show");
    }
}

function toggleMenu() {
    document.getElementById("mainMenu").classList.toggle("hideObject"); 
    let menuText = document.getElementById("button_menu").innerText;    
    if (menuText.endsWith("X")) {
        document.getElementById("button_menu").innerText = "☰ Menu";
    } else {
        document.getElementById("button_menu").innerText = "X";
    }
}