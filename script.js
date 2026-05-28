# script.js

```javascript
window.onload = function(){

const body = document.body;

const toggle = document.getElementById("theme-toggle");

const logo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

/* DARK MODE */

function enableDarkMode(){

body.classList.remove("light-mode");

toggle.checked = false;

logo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

localStorage.setItem("theme","dark");

}

/* LIGHT MODE */

function enableLightMode(){

body.classList.add("light-mode");

toggle.checked = true;

logo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

localStorage.setItem("theme","light");

}

/* LOAD SAVED THEME */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

enableLightMode();

}else{

enableDarkMode();

}

/* CHANGE THEME */

toggle.addEventListener("change", function(){

if(toggle.checked){

enableLightMode();

}else{

enableDarkMode();

}

});

};
```
