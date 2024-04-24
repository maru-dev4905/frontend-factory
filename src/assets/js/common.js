import {gsap, ScrollTrigger } from "gsap/all";
import checkRes from './common/checkRes.js';
import checkScrollDir from './common/checkScrollDir.js';

let provide = {
  w 	: $(window).innerWidth(),
  h 	: $(window).innerHeight(),
  res : undefined,
  loc	: window.location.href
};
window.w = provide.w;
window.h = provide.h;
window.loc = provide.loc;

if(window.w >= 768){
  window.res = "pc";
}else{
  window.res = "mo";
}

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ignoreMobileResize: true, invalidateOnRefresh: true});

$(document).ready(function () {
  console.log(1, 'document.ready');
});

$(window).on('resize', function(){
  ScrollTrigger.update();
});

checkRes(provide);
checkScrollDir();