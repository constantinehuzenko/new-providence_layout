let burgerClose = document.getElementById("burger");
let burgerBody = document.getElementById("body");
let burgerPage = document.getElementById("burger_page");

let burgerHeader = document.getElementById("header");
let mainSection = document.getElementById("main_section");

// Hamburger
burgerClose.addEventListener("click", function () {
  burgerClose.classList.toggle("close");
  burgerBody.classList.toggle("body_fix");
  burgerPage.classList.toggle("burger_page_open");
  burgerHeader.classList.toggle("white");
  burgerHeader.classList.add("header_fixed");
});

// Sticky nav bar
window.onscroll = function () {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    burgerHeader.classList.add("header_fixed");
    mainSection.classList.add("margin");
  } else {
    burgerHeader.classList.remove("header_fixed");
    mainSection.classList.remove("margin");
  }
};
