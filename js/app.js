// menu - firm
var firmButton = document.querySelector("nav li");
var openedFirmNav = document.querySelector(".opened-nav-firm");
console.log(openedFirmNav);

firmButton.addEventListener("mouseover", function() {
  openedFirmNav.hidden = false;
})
firmButton.addEventListener("mouseout", function() {
  openedFirmNav.hidden = true;
})
