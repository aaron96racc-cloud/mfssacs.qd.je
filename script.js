# script.js

```javascript id="w4m8rz"
// ====================================
// ESPERAR CARGA COMPLETA
// ====================================

window.onload = function(){

// ====================================
// ELEMENTOS
// ====================================

const body = document.body;

const toggleButton = document.getElementById("theme-toggle");

const logo = document.getElementById("logo");

const footerLogo = document.getElementById("footer-logo");

// ====================================
// ACTIVAR DARK MODE
// ====================================

function darkMode(){

body.classList.remove("light-mode");

toggleButton.innerHTML = "🌙";

logo.src = "img/logo-dark.png";

footerLogo.src = "img/logo-dark.png";

localStorage.setItem("theme","dark");

}

// ====================================
// ACTIVAR LIGHT MODE
// ====================================

function lightMode(){

body.classList.add("light-mode");

toggleButton.innerHTML = "☀️";

logo.src = "img/logo-light.png";

footerLogo.src = "img/logo-light.png";

localStorage.setItem("theme","light");

}

// ====================================
// CARGAR TEMA GUARDADO
// ====================================

const savedTheme = localStorage.getItem("theme");

// SI EL TEMA ES LIGHT

if(savedTheme === "light"){

lightMode();

}

// SI NO EXISTE O ES DARK

else{

darkMode();

}

// ====================================
// BOTON CAMBIO TEMA
// ====================================

toggleButton.addEventListener("click", function(){

// SI ESTA EN LIGHT

if(body.classList.contains("light-mode")){

darkMode();

}

// SI ESTA EN DARK

else{

lightMode();

}

});

};
```
