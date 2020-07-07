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

//ANIMACIONES CON GSAP

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

  menuHamburguesa.addEventListener("click", () => {
    gsap.to(menuDesplegable, {
      duration: 0.5,
      left: 0,
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
  });
})();

//EVENT LISTENERS NAV-mujeres
(function () {
  const mujeresNav = document.querySelector(".nav-mujer");
  const popUpMujer = document.querySelector(".select-mujeres");
  const menuOculto = document.querySelector(".menu-oculto");

  /*mujeresNav.addEventListener("mouseover", () => {
    gsap.to(popUpMujer, {
      height: 50,
      opacity: 1,
    });
    gsap.to(".link-mujeres", {
      delay: 0.2,
      marginBottom: 0,
    });
  });*/

  /*menuOculto.onmouseover = function (e) {
    let posicionMouse = e.target.className;
    console.log(posicionMouse);
    if (posicionMouse == "links nav-mujer") {
      gsap.to(popUpMujer, {
        height: 50,
        opacity: 1,
      });
      gsap.to(".link-mujeres", {
        delay: 0.2,
        marginBottom: 0,
      });
    }
    setTimeout(() => {
      if (
        posicionMouse != "link-pop-up link-mujeres" ||
        "mj" ||
        "links nav-mujer"
      ) {
        gsap.to(popUpMujer, {
          height: 0,
          opacity: 0,
        });
        gsap.to(".link-mujeres", {
          delay: 0.2,
          marginBottom: 50,
        });
      }
    }, 1000);
  };
*/
  popUpMujer.addEventListener("mouseleave", () => {});

  //EVENT LISTENERS NAV-hombres
  const hombresNav = document.querySelector(".nav-hombre");
  const popUpHombres = document.querySelector(".select-hombres");
  /*hombresNav.addEventListener("mouseover", () => {
    gsap.to(popUpHombres, {
      height: 50,
      opacity: 1,
    });
    gsap.to(".link-pop-up", {
      delay: 0.2,
      marginBottom: 0,
    });
  });

  hombresNav.addEventListener("mouseover", () => {
    if (popUpMujer.style.height == "50px") {
      gsap.to(popUpMujer, {
        height: 0,
        opacity: 0,
      });
      gsap.to(".link-mujeres", {
        marginBottom: 150,
      });
    }
  });*/
})();
