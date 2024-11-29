import checkRes from './common/checkRes.js';
import checkScrollDir from './common/checkScrollDir.js';
import debounce from './common/debounce.js';
import throttle from './common/throttle.js';

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

$(document).ready(function () {
  console.log(1, 'document.ready');
});

$(window).on('resize', debounce(() => {
  ScrollTrigger.update();
}, 500));

$(window).on('scroll', throttle(() => {

}, 500));

checkRes(provide);
checkScrollDir();