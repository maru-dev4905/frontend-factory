import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
let swiperAnimControll;
const swiper = new Swiper(".anim_swiper", {
  effect: "fade",
  loop: true,
  touchRatio: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function() {
      swiperAnimControll =  setInterval(() => {
        if(swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
          return;
        }else{
          swiper.slideTo(swiper.activeIndex + 1);
        }
      }, 5000);
    },
    slideChange : function() {
      $(".anim_swiper .swiper-slide ").removeClass("on");
      $(".anim_swiper .swiper-slide ").eq(this.activeIndex).addClass("on");
      clearInterval(swiperAnimControll);
    },
    slideChangeTransitionEnd : function() {
      swiperAnimControll =  setInterval(() => {
        if(swiper.activeIndex === swiper.slides.length - 1) {
          swiper.slideTo(0);
          return;
        }else{
          swiper.slideTo(swiper.activeIndex + 1);
        }
      }, 5000);
    },
  },
});

gsap.utils.toArray(".dot").forEach((dot, i) => {
  let animNum = dot.closest("svg").getAttribute("data-anim");
  gsap.to(dot, {
    duration: Math.floor(Math.random() * 10 + 5),
    ease: "linear",
    immediateRender: true,
    repeat: -1,
    motionPath: {
      path: "#line"+ animNum + "_" + (i + 1),
      align: "#line"+ animNum + "_" + (i + 1),
      alignOrigin: [0.5, 0.5],
      loop: true,
      start: 0,
    },
  });
});
gsap.utils.toArray(".dot2").forEach((dot, i) => {
  let animNum = dot.closest("svg").getAttribute("data-anim");
  gsap.to(dot, {
    duration: Math.floor(Math.random() * 10 + 5),
    ease: "linear",
    immediateRender: true,
    repeat: -1,
    motionPath: {
      path: "#line"+ animNum + "_" + (i + 1),
      align: "#line"+ animNum + "_" + (i + 1),
      alignOrigin: [0.5, 0.5],
      loop: true,
      start: 0,
    },
  });
});
gsap.utils.toArray(".dot3").forEach((dot, i) => {
  let animNum = dot.closest("svg").getAttribute("data-anim");
  gsap.to(dot, {
    duration: Math.floor(Math.random() * 10 + 5),
    ease: "linear",
    immediateRender: true,
    repeat: -1,
    motionPath: {
      path: "#line"+ animNum + "_" + (i + 1),
      align: "#line"+ animNum + "_" + (i + 1),
      alignOrigin: [0.5, 0.5],
      loop: true,
      start: 0,
    },
  });
});