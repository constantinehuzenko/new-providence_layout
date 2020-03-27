var navtoggle = document.getElementById('navtoggle')
var jsburmenu = document.getElementById('jsburmenu')
var jsbody = document.getElementById('jsbody')

navtoggle.addEventListener('click', function () {
    jsburmenu.classList.toggle('show');
    jsbody.classList.toggle('fix');
});

console.log(navtoggle, jsburmenu)

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("jsnav").className = "nav fixed";
        document.getElementById("jsmaincontent").className = "main-content fixmain";
    } else {
        document.getElementById("jsnav").className = "nav";
        document.getElementById("jsmaincontent").className = "main-content";
    }
}