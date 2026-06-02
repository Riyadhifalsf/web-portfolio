// INTRO VIDEO

setTimeout(() => {

  document.getElementById("intro").style.display = "none";

  document.getElementById("main-content").style.opacity = "1";

}, 5000);


// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

  if(navMenu.style.display === "flex"){
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }

});