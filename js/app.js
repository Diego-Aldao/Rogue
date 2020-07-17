//ANIMACIONES CON GSAP PARA EL HEADER
gsap.to(".titulos-principales", {
  duration: 1,
  left: 0,
  opacity: 1,
  delay: 0.2,
});
gsap.to(".btn-header", {
  duration: 1,
  bottom: 0,
  opacity: 1,
  delay: 0.7,
});

gsap.to(".mini-texto", {
  duration: 1.6,
  opacity: 1,
  delay: 0.6,
});
window.onload = () => {
  //SWIPER PARA EL HEADER
  var swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    autoplay: true,
    autoplay: {
      speed: 1500,
      delay: 5500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //SWIPER PARA SECCION COMPRA MUJER/HOMBRE
  var swiper = new Swiper(".contenedor-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: false,
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

  //SWIPER PARA SECCION CATEGORIAS
  var swiper = new Swiper(".contenedor-slider-productos-categorias", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //EVENT LISTENERS DEL MENU PRINCIPAL DESPLEGABLE
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

    //INICIO SECCION BOTONES
    const btnMenu = document.querySelector(".menu-global");
    const btnCategorias = document.querySelector(".menu-categorias");
    const contenidoGlobal = document.querySelector(
      ".contenido-principal-menu-desplegable"
    );
    const contenidoCategorias = document.querySelector(
      ".contenido-categorias-menu-desplegable"
    );

    btnMenu.addEventListener("click", () => {
      gsap.to(contenidoGlobal, {
        duration: 0.3,
        left: 0,
        width: "100%",
      });
      gsap.to(contenidoCategorias, {
        duration: 0.3,
        right: "-100%",
        width: 0,
      });
    });

    btnCategorias.addEventListener("click", () => {
      gsap.to(contenidoGlobal, {
        duration: 0.3,
        left: "-100%",
        width: 0,
      });
      gsap.to(contenidoCategorias, {
        duration: 0.3,
        right: 0,
        width: "100%",
      });
    });

    //INICIO SECCION FAVORITOS
    const titulo = document.querySelector(".titulo-favoritos-movil");
    const contenedorFavoritos = document.querySelector(
      ".favoritos-menu-desplazable"
    );
    const flecha = document.querySelector(".flechita-favoritos");
    titulo.addEventListener("click", () => {
      if (contenedorFavoritos.style.top == "-80px") {
        gsap.to(flecha, {
          duration: 0.3,
          transform: "rotate(180deg)",
        });
        gsap.to(contenedorFavoritos, {
          duration: 0.1,
          top: 0,
          opacity: 1,
        });
      } else {
        gsap.to(flecha, {
          duration: 0.3,
          transform: "rotate(0deg)",
        });
        gsap.to(contenedorFavoritos, {
          duration: 0.1,
          top: -80,
          opacity: 0,
        });
      }
    });
  })();

  //EVENT LISTENERS DROPDOWNS
  (function () {
    //FUNCIONES PARA ANIMAR DROPDOWNS
    const abrirDropdown = (dropdownTarget, itemLiHijo) => {
      gsap.to(dropdownTarget, {
        duration: 0.2,
        top: 60,
        opacity: 1,
        display: "flex",
        border: "1px solid rgb(228, 228, 228)",
      });
      gsap.to(itemLiHijo, {
        duration: 0.1,
        delay: 0.1,
        opacity: 1,
      });
    };
    const cerrarDropdown = (dropdownTarget, itemLiHijo) => {
      gsap.to(dropdownTarget, {
        duration: 0.2,
        top: 40,
        opacity: 0,
        display: "none",
        border: "none",
      });
      gsap.to(itemLiHijo, {
        duration: 0.1,
        opacity: 0,
      });
    };

    //INICIO DROPDOWN MUJER
    const navMujer = document.querySelector(".nav-mujer");
    const dropDownMujer = document.querySelector(".dropdown-mujer");

    navMujer.addEventListener("mouseover", () => {
      abrirDropdown(dropDownMujer, ".item-mujer"); //EL SEGUNDO PARAMETRO NO ESTA GUARDADO EN UNA VARIABLE PORQUE AL SER VARIOS ITEMS, TENDRIA QUE ITERAR POR CADA UNO DE ELLOS PARA ANIMARLOS, Y COMO ESO YA LO HACE LA PROPIA ANIMACION GSAP, ERA MAS SENCILLO PASARLE TODOS LOS ITEMS A ANIMAR DIRECTAMENTE.
    });
    navMujer.addEventListener("mouseleave", () => {
      cerrarDropdown(dropDownMujer, ".item-mujer");
    });

    //INICIO DROPDOWN HOMBRE
    const navHombre = document.querySelector(".nav-hombre");
    const dropDownHombre = document.querySelector(".dropdown-hombre");

    navHombre.addEventListener("mouseover", () => {
      abrirDropdown(dropDownHombre, ".item-hombre");
    });
    navHombre.addEventListener("mouseleave", () => {
      cerrarDropdown(dropDownHombre, ".item-hombre");
    });

    //INICIO DROPDOWN DESCUENTO
    const navDescuento = document.querySelector(".nav-descuento");
    const dropDownDescuento = document.querySelector(".dropdown-descuento");

    navDescuento.addEventListener("mouseover", () => {
      abrirDropdown(dropDownDescuento, ".item-descuento");
    });
    navDescuento.addEventListener("mouseleave", () => {
      cerrarDropdown(dropDownDescuento, ".item-descuento");
    });

    //INICIO DROPDOWN NUEVO
    const navNuevo = document.querySelector(".nav-nuevo");
    const dropDownNuevo = document.querySelector(".dropdown-nuevo");

    navNuevo.addEventListener("mouseover", () => {
      abrirDropdown(dropDownNuevo, ".item-nuevo");
    });
    navNuevo.addEventListener("mouseleave", () => {
      cerrarDropdown(dropDownNuevo, ".item-nuevo");
    });
  })();

  //EVENT LISTENERS MODAL
  (function () {
    const modal = document.querySelector(".modal-producto");
    const btnCerrarModal = document.querySelector(".btn-cerrar-modal");
    const btnAbrirModal = document.querySelectorAll(".img-item-compra");

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

  //EVENT LISTENERS DESPLAZABLES (CART, SEARCH, FAV, USER)
  (function () {
    //FUNCIONES PARA ABRIR Y CERRAR CADA UNO DE LOS DESPLAZABLES
    const abrirDesplazable = (contenedorPadre, contenedorTarget) => {
      gsap.to(contenedorPadre, {
        right: 0,
        opacity: 1,
      });
      gsap.to(contenedorTarget, {
        display: "block",
        width: "100%",
      });
      gsap.to(contenedorTarget, {
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
    };
    const CerrarDesplazable = (contenedorPadre, contenedorTarget) => {
      gsap.to(contenedorPadre, {
        right: "-100%",
        opacity: 0,
      });
      gsap.to(contenedorTarget, {
        delay: 0.7,
        display: "none",
        width: 0,
      });
      gsap.to(contenedorTarget, {
        opacity: 0,
      });
      gsap.to(bgOscuro, {
        opacity: 0,
      });
      gsap.to(bgOscuro, {
        delay: 0.5,
        width: 0,
      });
    };

    const contenedorDesplegable = document.querySelector(
      ".desplazable-cart-search-fav-user"
    );
    const bgOscuro = document.querySelector(".bg-black-desplazable");
    const btnCerrarDesplazable = document.querySelector(
      ".btn-cerrar-desplazable"
    );

    //INICIO CART
    const btnAbrirCart = document.querySelector(".cart");
    const contenedorCart = document.querySelector(".desplazable-cart");

    btnAbrirCart.addEventListener("click", () => {
      abrirDesplazable(contenedorDesplegable, contenedorCart);
    });
    btnCerrarDesplazable.addEventListener("click", () => {
      CerrarDesplazable(contenedorDesplegable, contenedorCart);
    });

    //INICIO USER
    const btnAbrirUser = document.querySelector(".login");
    const contenedorUser = document.querySelector(".desplazable-user");

    btnAbrirUser.addEventListener("click", () => {
      abrirDesplazable(contenedorDesplegable, contenedorUser);
    });
    btnCerrarDesplazable.addEventListener("click", () => {
      CerrarDesplazable(contenedorDesplegable, contenedorUser);
    });

    //INICIO SEARCH
    const btnAbrirSearch = document.querySelector(".buscar");
    const contenedorSearch = document.querySelector(".desplazable-search");

    btnAbrirSearch.addEventListener("click", () => {
      abrirDesplazable(contenedorDesplegable, contenedorSearch);
    });
    btnCerrarDesplazable.addEventListener("click", () => {
      CerrarDesplazable(contenedorDesplegable, contenedorSearch);
    });

    //INICIO FAVORITOS
    const btnAbrirFavoritos = document.querySelector(".favorito");
    const contenedorFavoritos = document.querySelector(".desplazable-fav");

    btnAbrirFavoritos.addEventListener("click", () => {
      abrirDesplazable(contenedorDesplegable, contenedorFavoritos);
    });
    btnCerrarDesplazable.addEventListener("click", () => {
      CerrarDesplazable(contenedorDesplegable, contenedorFavoritos);
    });
  })();
};
