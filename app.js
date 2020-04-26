// Hamburger icon close animation
var burgerClose = document.getElementById('burger')

burgerClose.addEventListener('click', function () {
    burgerClose.classList.toggle('close');
});

// Sticky nav bar
window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("header").className = "header header_fixed";
        // document.getElementById("jsmaincontent").className = "main-content fixmain";
    } else {
        document.getElementById("header").className = "header";
        // document.getElementById("jsmaincontent").className = "main-content";
    }
};
