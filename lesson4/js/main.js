window.onload = function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    document.getElementById('copyrightYear').innerText = year;
    document.getElementById('lastUpdated').innerText = 
    "Last Updated " + currentDate.toLocaleDateString() + " " + 
    currentDate.toLocaleTimeString(); 
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