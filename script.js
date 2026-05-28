const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const logo = document.getElementById("logo");

toggleButton.addEventListener("click", () => {

body.classList.toggle("light-mode");

if(body.classList.contains("light-mode")){

logo.src = "img/logo-light.png";

toggleButton.innerHTML = "☀️";

}else{

logo.src = "img/logo-dark.png";

toggleButton.innerHTML = "🌙";

}

});
