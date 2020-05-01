// Hamburger icon close animation
var burgerClose = document.getElementById('burger')
var burgerBody = document.getElementById('body')
var burgerPage = document.getElementById('burger_page')
var burgerHeader = document.getElementById('header')

burgerClose.addEventListener('click', function () {
    burgerClose.classList.toggle('close');
    burgerBody.classList.toggle('body_fix');
    burgerPage.classList.toggle('burger_page_open');
    burgerHeader.classList.toggle('white');
});

// Sticky nav bar
window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").className = "header header_fixed";
        document.getElementById("main_section").className = "main_section margin";
    } else {
        document.getElementById("header").className = "header";
        document.getElementById("main_section").className = "main_section";
    }
};
