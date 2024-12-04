import getFontCdn from '../module/common/font.js';
import checkRes from '../module/common/checkRes.js';
import checkScrollDir from '../module/common/checkScrollDir.js';
import debounce from '../module/common/debounce.js';
import throttle from '../module/common/throttle.js';

// window.wvCore 객체 생성 및 함수 등록
window.wvCore = {
  getFontCdn,
  checkRes,
  checkScrollDir,
  debounce,
  throttle,
};