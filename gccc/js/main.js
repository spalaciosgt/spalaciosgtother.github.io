/*
    Toggle Menu Function
*/ 
function toggleMenu() {
    document.getElementById("mainMenu").classList.toggle("hideObject"); 
    let menuText = document.getElementById("mainMenuButton").innerText;    
    if (menuText.endsWith("X")) {
        document.getElementById("mainMenuButton").innerText = "☰";
    } else {
        document.getElementById("mainMenuButton").innerText = "X";
    }
}
//---------------------------------------------------------------------------------------------------//

/* 
    Current date at footer
*/    
let currentDate = new Date();
let year = currentDate.getFullYear();
document.getElementById("copyrightYear").innerText = year;
document.getElementById("lastModifiedDate").innerText = 
    "Last Modified Date " + currentDate.toLocaleDateString() + 
        " " + currentDate.toLocaleTimeString();
//---------------------------------------------------------------------------------------------------//

/* 
    Web Font Loading
*/
WebFont.load({
    google: {
        families: ["Open Sans", "Lora"]
    }
});
//---------------------------------------------------------------------------------------------------//

/*
    Complement Functions
*/
function confirmApplication() {
    var confirmButton = document.getElementById("submitButton3");
    confirmButton.classList.remove("hideButton");
    var preButton = document.getElementById("submitButton2");
    preButton.classList.add("hideButton");    
}

function toList() {
    var dir = document.getElementById("directory");
    dir.classList.add("gridOne");
}

function toGrid() {
    var dir = document.getElementById("directory");
    dir.classList.remove("gridOne");
    
}

/* 
    Sticky Menu
*/    
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
//---------------------------------------------------------------------------------------------------//