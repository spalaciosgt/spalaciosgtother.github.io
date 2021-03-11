/*
    Toggle Menu Function
*/ 
function toggleMenu() {
    document.getElementById("mainMenu").classList.toggle("hideObject"); 
    let menuText = document.getElementById("button_menu").innerText;    
    if (menuText.endsWith("X")) {
        document.getElementById("button_menu").innerText = "☰ Menu";
    } else {
        document.getElementById("button_menu").innerText = "X";
    }
}

// Current date at footer
let currentDate = new Date();
let year = currentDate.getFullYear();
document.getElementById('copyrightYear').innerText = year;
document.getElementById('lastUpdated').innerText = "Last Updated " + currentDate.toLocaleDateString() + " " + 
                                                    currentDate.toLocaleTimeString();     

// Message if today is Friday
let currentDay = currentDate.getDay();
if (currentDay != 5) {
    document.getElementById("messageJS").classList.toggle("hide");
} else {
    document.getElementById("messageJS").classList.toggle("show");    
}

// Web Font Load
WebFont.load({
    google: {
        families: ["Montserrat"]
    }
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}