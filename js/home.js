window.onload = function() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    document.getElementById('copyrightYear').innerText = year;
    document.getElementById('lastUpdated').innerText = 
    currentDate.toLocaleDateString() + " " + 
    currentDate.toLocaleTimeString(); 
}