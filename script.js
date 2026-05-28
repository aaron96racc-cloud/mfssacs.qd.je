# script.js

```javascript
window.onload = function(){

const body = document.body;

const toggleButton = document.getElementById("theme-toggle");

const logo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

/* DARK MODE */

function darkMode(){

body.classList.remove("light-mode");

toggleButton.innerHTML = "🌙";

logo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

localStorage.setItem("theme","dark");

}

/* LIGHT MODE */

function lightMode(){

body.classList.add("light-mode");

toggleButton.innerHTML = "☀️";

logo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

localStorage.setItem("theme","light");

}

/* CARGAR TEMA */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

lightMode();

}else{

darkMode();

}

/* BOTON CAMBIO */

toggleButton.addEventListener("click", function(){

if(body.classList.contains("light-mode")){

darkMode();

}else{

lightMode();

}

});

};
```
