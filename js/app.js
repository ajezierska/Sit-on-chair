// menu - firm
var firmButton = document.querySelector("nav li");
var openedFirmNav = document.querySelector(".opened-nav-firm");

firmButton.addEventListener("mouseover", function() {
  openedFirmNav.hidden = false;
})
firmButton.addEventListener("mouseout", function() {
  openedFirmNav.hidden = true;
})

//first-section - hide image-chair-inside
var imageChair = document.querySelectorAll(".image-chair");

for (var i = 0; i < imageChair.length; i++) {
  imageChair[i].addEventListener("mouseover", function() {
    this.children[0].hidden = true;
  })
  imageChair[i].addEventListener("mouseout", function() {
    this.children[0].hidden = false;
  })
}

//slider
var prev = document.querySelector(".arrow-left");
var next = document.querySelector(".arrow-right");

var slides = document.querySelectorAll(".header-content-left li");
var picsIndex = 0;

slides[0].classList.add('visible');

next.addEventListener('click',function () {
    slides[picsIndex].classList.remove('visible');
    picsIndex++;
    if(picsIndex === slides.length){
      picsIndex = 0;
    }
    slides[picsIndex].classList.add('visible');
})
prev.addEventListener('click',function () {
    slides[picsIndex].classList.remove('visible');
    picsIndex--;
    if(picsIndex < 0){
      picsIndex = slides.length -1;
    }
    slides[picsIndex].classList.add('visible');
})
