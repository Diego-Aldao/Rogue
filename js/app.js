var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".contenedor-slider", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".contenedor-slider-productos-categorias", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//ANIMACIONES CON GSAP HEADER
gsap.from(".titulos-principales", {
  duration: 1,
  x: -150,
  opacity: 0,
  delay: 0.2,
});
gsap.from(".btn-principal", {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 0.7,
});
gsap.from(".mini-texto", {
  duration: 1.6,
  opacity: 0,
  delay: 0.6,
});

gsap.from(".body", {
  duration: 2,
  opacity: 0,
});

//MENU DESPLEGABLE

//EVENT LISTENERS DEL MENU DESPLEGABLE
(function () {
  const menuDesplegable = document.querySelector(".menu-desplegable");
  const menuHamburguesa = document.querySelector(".menu-hamburguesa");
  const botonCerrar = document.querySelector(".btn-cerrar");
  const bgOscuro = document.querySelector(".bg-black-desplazable");

  menuHamburguesa.addEventListener("click", () => {
    gsap.to(menuDesplegable, {
      duration: 0.5,
      left: 0,
    });
    gsap.to(bgOscuro, {
      width: "100%",
    });
    gsap.to(bgOscuro, {
      delay: 0.5,
      opacity: 1,
    });
  });

  botonCerrar.addEventListener("click", () => {
    gsap.to("body", {
      opacity: 1,
    });
    gsap.to(menuDesplegable, {
      duration: 0.5,
      left: "-100vw",
    });
    gsap.to(bgOscuro, {
      opacity: 0,
    });
    gsap.to(bgOscuro, {
      delay: 0.5,
      width: 0,
    });
  });
})();

//EVENT LISTENERS DROPDOWNS
(function () {
  const navMujer = document.querySelector(".nav-mujer");
  const dropDownMujer = document.querySelector(".dropdown-mujer");

  navMujer.addEventListener("mouseover", () => {
    gsap.to(dropDownMujer, {
      duration: 0.5,
      height: 200,
      border: "1px solid rgb(228, 228, 228)",
    });
    gsap.to(".item-mujer", {
      duration: 0.1,
      delay: 0.1,
      opacity: 1,
    });
  });
  navMujer.addEventListener("mouseleave", () => {
    gsap.to(dropDownMujer, {
      duration: 0.5,
      height: 0,
      border: "none",
    });
    gsap.to(".item-mujer", {
      duration: 0.1,
      opacity: 0,
    });
  });
})();

(function () {
  const navHombre = document.querySelector(".nav-hombre");
  const dropDownHombre = document.querySelector(".dropdown-hombre");

  navHombre.addEventListener("mouseover", () => {
    gsap.to(dropDownHombre, {
      duration: 0.5,
      height: 200,
      border: "1px solid rgb(228, 228, 228)",
    });
    gsap.to(".item-hombre", {
      duration: 0.1,
      delay: 0.3,
      opacity: 1,
    });
  });
  navHombre.addEventListener("mouseleave", () => {
    gsap.to(".item-hombre", {
      duration: 0.2,
      opacity: 0,
    });
    gsap.to(dropDownHombre, {
      duration: 0.5,
      height: 0,
      border: "none",
    });
  });
})();

(function () {
  const navDescuento = document.querySelector(".nav-descuento");
  const dropDownDescuento = document.querySelector(".dropdown-descuento");

  navDescuento.addEventListener("mouseover", () => {
    gsap.to(dropDownDescuento, {
      duration: 0.5,
      height: 150,
      border: "1px solid rgb(228, 228, 228)",
    });
    gsap.to(".item-descuento", {
      duration: 0.1,
      delay: 0.1,
      opacity: 1,
    });
  });
  navDescuento.addEventListener("mouseleave", () => {
    gsap.to(dropDownDescuento, {
      duration: 0.5,
      height: 0,
      border: "none",
    });
    gsap.to(".item-descuento", {
      duration: 0.1,
      opacity: 0,
    });
  });
})();

(function () {
  const navNuevo = document.querySelector(".nav-nuevo");
  const dropDownNuevo = document.querySelector(".dropdown-nuevo");

  navNuevo.addEventListener("mouseover", () => {
    gsap.to(dropDownNuevo, {
      duration: 0.5,
      height: 200,
      border: "1px solid rgb(228, 228, 228)",
    });
    gsap.to(".item-nuevo", {
      duration: 0.1,
      delay: 0.1,
      opacity: 1,
    });
  });
  navNuevo.addEventListener("mouseleave", () => {
    gsap.to(dropDownNuevo, {
      duration: 0.5,
      height: 0,
      border: "none",
    });
    gsap.to(".item-nuevo", {
      duration: 0.1,
      opacity: 0,
    });
  });
})();

//EVENT LISTENERS MODAL
(function () {
  const modal = document.querySelector(".modal-producto");
  const btnCerrarModal = document.querySelector(".btn-cerrar-modal");
  const btnAbrirModal = document.querySelectorAll(".ver-detalle");

  btnAbrirModal.forEach((boton) => {
    boton.addEventListener("click", () => {
      gsap.to(modal, {
        width: "100%",
      });
      gsap.to(modal, {
        delay: 0.4,
        opacity: 1,
      });
    });
  });

  btnCerrarModal.addEventListener("click", () => {
    gsap.to(modal, {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(modal, {
      delay: 0.4,
      width: 0,
    });
  });
})();

//EVENT LISTENERS DESPLAZABLES
(function () {
  const contenedorDesplegable = document.querySelector(
    ".desplazable-cart-search-fav-user"
  );
  const btnCerrarDesplazable = document.querySelector(
    ".btn-cerrar-desplazable"
  );
  const bgOscuro = document.querySelector(".bg-black-desplazable");

  //INICIO CART
  const btnAbrirCart = document.querySelector(".cart");
  const contenedorCart = document.querySelector(".desplazable-cart");

  btnAbrirCart.addEventListener("click", () => {
    gsap.to(contenedorDesplegable, {
      right: 0,
      opacity: 1,
    });
    gsap.to(contenedorCart, {
      display: "block",
      width: "100%",
    });
    gsap.to(contenedorCart, {
      delay: 0.8,
      opacity: 1,
    });
    gsap.to(bgOscuro, {
      width: "100%",
    });
    gsap.to(bgOscuro, {
      delay: 0.3,
      opacity: 1,
    });
  });

  btnCerrarDesplazable.addEventListener("click", () => {
    gsap.to(contenedorDesplegable, {
      right: "-100%",
      opacity: 0,
    });
    gsap.to(contenedorCart, {
      delay: 0.7,
      display: "none",
      width: 0,
    });
    gsap.to(contenedorCart, {
      opacity: 0,
    });
    gsap.to(bgOscuro, {
      opacity: 0,
    });
    gsap.to(bgOscuro, {
      delay: 0.5,
      width: 0,
    });
  });

  //INICIO USER
  const btnAbrirUser = document.querySelector(".login");
  const contenedorUser = document.querySelector(".desplazable-user");
  btnAbrirUser.addEventListener("click", () => {
    gsap.to(contenedorDesplegable, {
      right: 0,
      opacity: 1,
    });
    gsap.to(contenedorUser, {
      display: "block",
      width: "100%",
    });
    gsap.to(contenedorUser, {
      delay: 0.8,
      opacity: 1,
    });
    gsap.to(bgOscuro, {
      width: "100%",
    });
    gsap.to(bgOscuro, {
      delay: 0.3,
      opacity: 1,
    });
  });

  btnCerrarDesplazable.addEventListener("click", () => {
    gsap.to(contenedorDesplegable, {
      right: "-100%",
      opacity: 0,
    });
    gsap.to(contenedorUser, {
      delay: 0.7,
      display: "none",
      width: 0,
    });
    gsap.to(contenedorUser, {
      opacity: 0,
    });
    gsap.to(bgOscuro, {
      opacity: 0,
    });
    gsap.to(bgOscuro, {
      delay: 0.5,
      width: 0,
    });
  });
})();
