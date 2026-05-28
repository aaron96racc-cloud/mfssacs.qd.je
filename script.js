# script.js

```javascript id="s3w9qn"
// ESPERAR CARGA COMPLETA

document.addEventListener("DOMContentLoaded", function(){

// ELEMENTOS

const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const mainLogo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

/* =========================
   FUNCION APLICAR TEMA
========================= */

function applyTheme(theme){

// LIGHT MODE

if(theme === "light"){

body.classList.add("light-mode");

toggleButton.innerHTML = "☀️";

mainLogo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

}

// DARK MODE

else{

body.classList.remove("light-mode");

toggleButton.innerHTML = "🌙";

mainLogo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

}

}

/* =========================
   CARGAR TEMA GUARDADO
========================= */

const savedTheme = localStorage.getItem("theme");

// SI EXISTE

if(savedTheme){

applyTheme(savedTheme);

}

// SI NO EXISTE

else{

applyTheme("dark");

}

/* =========================
   BOTON CAMBIO TEMA
========================= */

toggleButton.addEventListener("click", function(){

// SI ESTA EN LIGHT

if(body.classList.contains("light-mode")){

applyTheme("dark");

localStorage.setItem("theme", "dark");

}

// SI ESTA EN DARK

else{

applyTheme("light");

localStorage.setItem("theme", "light");

}

});

});
```
