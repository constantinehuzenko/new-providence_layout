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
  mainSection.classList.add("margin");
});


// on load animation
function onLoadAnimationsMain() {
  let elementsLibrary = [
    ".main_img_inner",
    ".main_text_large",
    ".main_text_small",
    ".main_btn",
  ];
  let arr = [];

  for (let i = 0; i < elementsLibrary.length; i++) {
    let variableLoop = document.querySelector(elementsLibrary[i]);
    arr.push(variableLoop);
  }

  function addClassForElement(el) {
    el.classList.add("animation");
  }

  function scrollEvent(arrey) {
    for (let i = 0; i < arrey.length; i++) {
      addClassForElement(arrey[i]);
    }
  }
  scrollEvent(arr);
}

onLoadAnimationsMain();

function scrollAnimationsMain() {
  // On scroll function variables
  let elementsLibrary = [
    ".benefits_inner",
    ".protect_block_img",
    ".protect_block_content>h2",
    ".protect_block_content>p",
    ".protect_block_btns",
    ".map_block_content>h2",
    ".map_block_content>p",
    ".map_block_partners",
    ".map_block_img",
    ".app_screens>h1",
    ".app_screens_breakline",
    ".app_screens>h4",
    ".app_screens_imgs",
    ".form>h4",
    ".form>h1",
    ".form_input",
    ".app_screen_btn",
    ".footer_inner",
  ];
  let arr = [];

  // add variables from arrey
  for (let i = 0; i < elementsLibrary.length; i++) {
    let variableLoop = document.querySelector(elementsLibrary[i]);
    arr.push(variableLoop);
  }

  // get cordinate of element
  function getCordinateOfElement(el) {
    let c = el.getBoundingClientRect();
    let cord = c.top - window.innerHeight;
    if (cord < 0) {
      el.style.opacity = "0";
    }
    if (cord < -150) {
      el.classList.add("animation");
    }
  }

  // get cordinate of all elements
  function scrollEvent(arrey) {
    for (let i = 0; i < arrey.length; i++) {
      getCordinateOfElement(arrey[i]);
    }
  }

  window.onscroll = function () {
    
    // header scroll fix
    scrollEvent(arr);
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
}

scrollAnimationsMain();
// On scroll function end

