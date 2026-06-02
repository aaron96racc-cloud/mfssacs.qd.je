document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const footerLogo = document.getElementById("footer-logo");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const revealElements = document.querySelectorAll(".reveal");
  const quoteForm = document.getElementById("quote-form");
  const emailSubmit = document.getElementById("email-submit");
  const formStatus = document.getElementById("form-status");

  function updateThemeLabel(isLight) {
    if (!toggle) {
      return;
    }

    toggle.setAttribute("aria-label", isLight ? "Activar modo oscuro" : "Activar modo claro");
  }

  // Mantiene el modo elegido por el visitante para mejorar la experiencia al volver.
  function setTheme(theme) {
    const isLight = theme === "light";

    body.classList.toggle("light-mode", isLight);

    if (toggle) {
      toggle.checked = isLight;
    }

    if (logo) {
      logo.src = isLight ? "img/logo-light.png" : "img/logo-dark.png";
    }

    if (footerLogo) {
      footerLogo.src = isLight ? "img/logo-light.png" : "img/logo-dark.png";
    }

    updateThemeLabel(isLight);
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "light" ? "light" : "dark");

  if (toggle) {
    toggle.addEventListener("change", () => {
      setTheme(toggle.checked ? "light" : "dark");
    });
  }

  // Controla el menú móvil sin bloquear la navegación por anclas.
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      body.classList.toggle("menu-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        body.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

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

  function buildQuoteMessage() {
    if (!quoteForm) {
      return "Hola, solicito una cotización corporativa.";
    }

    const data = new FormData(quoteForm);

    return [
      "Hola, solicito una cotización corporativa:",
      "",
      `Empresa: ${data.get("empresa") || "No indicado"}`,
      `RUC: ${data.get("ruc") || "No indicado"}`,
      `Contacto: ${data.get("contacto") || "No indicado"}`,
      `Cargo o área: ${data.get("cargo") || "No indicado"}`,
      `Teléfono: ${data.get("telefono") || "No indicado"}`,
      `Correo: ${data.get("email") || "No indicado"}`,
      `Servicio requerido: ${data.get("servicio") || "No indicado"}`,
      `Ubicación: ${data.get("ubicacion") || "No indicado"}`,
      `Prioridad: ${data.get("prioridad") || "No indicado"}`,
      `Cantidad estimada: ${data.get("cantidad") || "No indicado"}`,
      "",
      `Detalle: ${data.get("detalle") || "No indicado"}`,
      "",
      "Autorizo el tratamiento de mis datos para atender esta solicitud."
    ].join("\n");
  }

  function validateQuoteForm() {
    if (!quoteForm) {
      return false;
    }

    if (!quoteForm.reportValidity()) {
      if (formStatus) {
        formStatus.textContent = "Revisa los campos obligatorios antes de enviar tu solicitud.";
      }
      return false;
    }

    return true;
  }

  // Convierte el formulario en una solicitud ordenada para atención comercial por WhatsApp o correo.
  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!validateQuoteForm()) {
        return;
      }

      if (formStatus) {
        formStatus.textContent = "Se abrirá WhatsApp con tu solicitud preparada. Revisa el mensaje y presiona enviar para completar el contacto.";
      }

      window.open(`https://wa.me/51969300563?text=${encodeURIComponent(buildQuoteMessage())}`, "_blank", "noopener");
    });
  }

  if (emailSubmit) {
    emailSubmit.addEventListener("click", () => {
      if (!validateQuoteForm()) {
        return;
      }

      const subject = "Solicitud de cotización corporativa";
      const bodyMessage = buildQuoteMessage();

      if (formStatus) {
        formStatus.textContent = "Se abrirá tu aplicación de correo con la solicitud preparada. Revisa el mensaje y envíalo para completar el contacto.";
      }

      window.location.href = `mailto:flamecontrols.mfs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyMessage)}`;
    });
  }
});
