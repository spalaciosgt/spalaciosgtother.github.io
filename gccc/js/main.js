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