# script.js

```javascript id="n2v9sh"
const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const mainLogo = document.getElementById("logo");

const footerLogo = document.querySelector(".footer-logo");

/* =========================
   FUNCION CAMBIAR TEMA
========================= */

function setTheme(theme){

if(theme === "light"){

body.classList.add("light-mode");

/* CAMBIAR LOGOS */

mainLogo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

/* ICONO */

toggleButton.innerHTML = "☀️";

/* GUARDAR */

localStorage.setItem("theme", "light");

}

/* ===== DARK ===== */

else{

body.classList.remove("light-mode");

/* CAMBIAR LOGOS */

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

const savedTheme = localStorage.getItem("theme");

/* SI EXISTE */

if(savedTheme){

setTheme(savedTheme);

}

/* SI NO EXISTE */

else{

setTheme("dark");

}

/* =========================
   BOTON CAMBIO
========================= */

toggleButton.addEventListener("click", () => {

if(body.classList.contains("light-mode")){

setTheme("dark");

}else{

setTheme("light");

}

});
```
