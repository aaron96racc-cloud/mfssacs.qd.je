
window.addEventListener("DOMContentLoaded", () => {

const body = document.body;
const toggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");
const footerLogo = document.getElementById("footer-logo");

function enableDarkMode(){

body.classList.remove("light-mode");

toggle.checked = false;

logo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

localStorage.setItem("theme","dark");

}

function enableLightMode(){

body.classList.add("light-mode");

toggle.checked = true;

logo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

localStorage.setItem("theme","light");

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

enableLightMode();

}else{

enableDarkMode();

}

toggle.addEventListener("change", () => {

if(toggle.checked){

enableLightMode();

}else{

enableDarkMode();

}

});

});
