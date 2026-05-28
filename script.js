# script.js

```javascript id="1bf5nk"
const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const logo = document.getElementById("logo");

/* =========================
   CARGAR TEMA GUARDADO
========================= */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

body.classList.add("light-mode");

logo.src = "img/logo-light.png";

toggleButton.innerHTML = "☀️";

}else{

body.classList.remove("light-mode");

logo.src = "img/logo-dark.png";

toggleButton.innerHTML = "🌙";

}

/* =========================
   CAMBIAR TEMA
========================= */

toggleButton.addEventListener("click", () => {

body.classList.toggle("light-mode");

/* ===== LIGHT MODE ===== */

if(body.classList.contains("light-mode")){

logo.src = "img/logo-light.png";

toggleButton.innerHTML = "☀️";

/* GUARDAR */

localStorage.setItem("theme", "light");

}

/* ===== DARK MODE ===== */

else{

logo.src = "img/logo-dark.png";

toggleButton.innerHTML = "🌙";

/* GUARDAR */

localStorage.setItem("theme", "dark");

}

});
```
