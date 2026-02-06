(() => {
  "use strict";
  new Swiper(".promoSwiper", {
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var e = document.querySelectorAll(".price__tab"),
    t = document.querySelectorAll(".price__cards-container");
  e.forEach(function (l, s) {
    l.addEventListener("click", function () {
      e.forEach(function (e) {
        e.classList.remove("price__tab_active"),
          e.classList.remove("text__color_yellow");
      }),
        t.forEach(function (e) {
          e.classList.remove("display-flex");
        }),
        l.classList.toggle("price__tab_active"),
        l.classList.toggle("text__color_yellow"),
        t[s].classList.add("display-flex");
    });
  });
  var l = document.querySelectorAll(".hardware__tab"),
    s = document.querySelectorAll(".hardware__card-container");
  l.forEach(function (e, t) {
    e.addEventListener("click", function () {
      l.forEach(function (e) {
        e.classList.remove("hardware__tab_active"),
          e.classList.add("text__color_yellow");
      }),
        s.forEach(function (e) {
          e.classList.remove("display-flex");
        }),
        e.classList.toggle("text__color_yellow"),
        e.classList.toggle("hardware__tab_active"),
        s[t].classList.add("display-flex");
    });
  });
  var c = document.querySelector(".header__burger-btn"),
    r = document.querySelector(".header__menu"),
    a = document.querySelector(".header__burger-back"),
    o = document.querySelector(".page"),
    i = document.querySelectorAll(".header__link");
  c.addEventListener("click", function () {
    r.classList.toggle("display-flex"),
      a.classList.toggle("display-flex"),
      o.classList.toggle("stop-scrolling");
  }),
    i.forEach(function (e) {
      e.addEventListener("click", function () {
        r.classList.remove("display-flex"),
          a.classList.remove("display-flex"),
          o.classList.remove("stop-scrolling");
      });
    }),
    a.addEventListener("click", function () {
      r.classList.remove("display-flex"),
        a.classList.remove("display-flex"),
        o.classList.remove("stop-scrolling");
    });
  var n = document.querySelectorAll(".wechat-modal-trigger"),
    d = document.getElementById("wechatModal"),
    m = document.querySelector(".wechat-modal__close"),
    u = document.querySelector(".wechat-modal__overlay");
  n &&
    n.forEach(function (e) {
      e.addEventListener("click", function (t) {
        t.preventDefault(),
          d.classList.add("active"),
          o.classList.add("stop-scrolling");
      });
    }),
    m.addEventListener("click", function () {
      d.classList.remove("active"),
        o.classList.remove("stop-scrolling");
    }),
    u.addEventListener("click", function () {
      d.classList.remove("active"),
        o.classList.remove("stop-scrolling");
    });
})();
