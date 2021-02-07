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
}  