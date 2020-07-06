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
  delay: 1,
  delay: 0.6,
});

gsap.from(".body", {
  duration: 2,
  opacity: 0,
});
