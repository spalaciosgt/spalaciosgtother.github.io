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
