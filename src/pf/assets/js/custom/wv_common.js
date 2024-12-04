let { getFontCdn, checkRes, checkScrollDir, debounce, throttle } = window.wvCore;

// window.provide로 객체를 등록
window.provide = {
  w: $(window).innerWidth(),
  h: $(window).innerHeight(),
  res: undefined,
  loc: window.location.href,
};

window.w = window.provide.w;
window.h = window.provide.h;
window.loc = window.provide.loc;

if (window.w >= 768) {
  window.provide.res = "pc";
} else {
  window.provide.res = "mo";
}

$(document).ready(function () {
  // 필요시 window.provide를 사용
  window.wvCore.getFontCdn('Pretendard');
  console.log(1, 'document.ready');
});

$(window).on('resize', window.wvCore.debounce(() => {
  ScrollTrigger.update();
}, 500));

$(window).on('scroll', window.wvCore.throttle(() => {
  // 빈 스크롤 핸들러
}));

// 필요시 window.provide를 다른 코드에서 사용
window.wvCore.checkRes(window.provide);
window.wvCore.checkScrollDir();
