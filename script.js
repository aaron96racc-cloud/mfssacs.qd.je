window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const footerLogo = document.getElementById("footer-logo");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const revealElements = document.querySelectorAll(".reveal");

  // Mantiene el modo elegido por el visitante para mejorar la experiencia al volver.
  function setTheme(theme) {
    const isLight = theme === "light";

    body.classList.toggle("light-mode", isLight);
    toggle.checked = isLight;
    logo.src = isLight ? "img/logo-light.png" : "img/logo-dark.png";
    footerLogo.src = isLight ? "img/logo-light.png" : "img/logo-dark.png";
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "light" ? "light" : "dark");

  toggle.addEventListener("change", () => {
    setTheme(toggle.checked ? "light" : "dark");
  });

  // Controla el menú móvil sin bloquear la navegación por anclas.
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  // Activa animaciones suaves cuando cada sección entra en pantalla.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
});
