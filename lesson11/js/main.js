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

let imagesLoad = document.querySelectorAll("img[data-src]");

let loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  let observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesLoad.forEach((img) => {
    loadImages(img);
  });
}

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