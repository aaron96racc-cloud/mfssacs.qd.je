# script.js

```javascript id="r5b8x1"
const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const mainLogo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

/* =========================
   CAMBIAR TEMA
========================= */

function setTheme(theme){

if(theme === "light"){

body.classList.add("light-mode");

/* LOGOS */

mainLogo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

/* ICONO */

toggleButton.innerHTML = "☀️";

/* GUARDAR */

localStorage.setItem("theme", "light");

}

/* DARK MODE */

else{

body.classList.remove("light-mode");

/* LOGOS */

mainLogo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

/* ICONO */

toggleButton.innerHTML = "🌙";

/* GUARDAR */

localStorage.setItem("theme", "dark");

}

}

/* =========================
   CARGAR TEMA GUARDADO
========================= */

document.addEventListener("DOMContentLoaded", () => {

const savedTheme = localStorage.getItem("theme");

/* SI EXISTE */

if(savedTheme){

setTheme(savedTheme);

}

/* SI NO EXISTE */

else{

setTheme("dark");

}

/* BOTON */

toggleButton.addEventListener("click", () => {

if(body.classList.contains("light-mode")){

setTheme("dark");

}else{

setTheme("light");

}

});

});
```
