import toggleMenuEvt from "./components/ToggleMenuEvt.js";
import scrBtnEvt from './components/ScrBtnEvt.js';
import tabInit from "./components/Tab/TabInit.js";
import targetClickEvt from "./components/TargetAddClassEvt.js";
import basicModalEvt from "./components/Modal/BasicModalEvt.js";

window.onload = function() {
  const components = {
    menuBtn: $(".menu_btn"),
    scrBtn: $(".scr_btn"),
    modalBtn: $(".wv_modal_btn"),
    accordion: $(".wv_accordion"),
    tab: $(".wv_tab"),
    targetBtn: $(".wv_target_btn"),
    copyBtn: $(".wv_copy_btn"),
    video: $(".wv_video"),
  }

  const triggerEvt = {
    scrBtnClick : () => {
      components.scrBtn.on('click', function(){ scrBtnEvt($(this)); });
    },
    targetBtnClick : () => {
      components.targetBtn.on("click",function(){ targetClickEvt($(this)); });
    },
    modalBtnTrigger : () => {
      components.modalBtn.on('click', function(){ basicModalEvt($(this)); });
    }
  }

  const init  = () => {
    components.scrBtn.length !== 0 && triggerEvt.scrBtnClick();

    components.menuBtn.length !== 0 && toggleMenuEvt();
    components.tab.length !== 0 && tabInit();
    components.targetBtn.length !== 0 && triggerEvt.targetBtnClick();

    components.modalBtn.length !== 0 ? triggerEvt.modalBtnTrigger() : 0;

    // components.accordion.length !== 0 ? triggerEvt.accordionTrigger() : 0;
    // components.anchor.length !== 0 ? triggerEvt.anchorTrigger() : 0;
    // components.copyBtn.length !== 0 ? triggerEvt.copyTrigger() : 0;
    // components.video.length !== 0 ? triggerEvt.videoTrigger() : 0;
  }
  init();
}
