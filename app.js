// Hamburger icon close animation
let burgerClose = document.getElementById('burger')
let burgerBody = document.getElementById('body')
let burgerPage = document.getElementById('burger_page')
let burgerHeader = document.getElementById('header')

burgerClose.addEventListener('click', function () {
    burgerClose.classList.toggle('close');
    burgerBody.classList.toggle('body_fix');
    burgerPage.classList.toggle('burger_page_open');
    burgerHeader.classList.toggle('white');
    document.getElementById("header").className = "header header_fixed";
    document.getElementById("main_section").className = "main_section margin";
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

// Animations
let mainImg = document.querySelector('.main_img_inner') 

window.onload = function() {
    mainImg.classList.add('main_img_inner_animation')
}
