import toggleMenuEvt from "./components/ToggleMenuEvt.js";
import scrBtnEvt from './components/ScrBtnEvt.js';
import tabInit from "./components/Tab/TabInit.js";
import tabEvt from "./components/Tab/TabEvt.js";
import targetClickEvt from "./components/TargetAddClassEvt.js";
import basicModalEvt from "./components/Modal/BasicModalEvt.js";
import accordionEvt from "./components/AccordionEvt.js";
import copyEvt from "./components/Copy/CopyEvt.js";

window.addEventListener('load', ()=>{
  const components = {
    menuBtn: $(".menu_btn"),
    scrBtn: $(".scr_btn"),
    modalBtn: $(".wv_modal_btn"),
    accordionBtn: $(".wv_accordion_btn"),
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
    },
    accordionTrigger: () => {
      components.accordionBtn.on('click', function(){ accordionEvt($(this)); });
    },
    tabTrigger: () => {
      components.tab.find(".wv_tab_btn").on('click', function(){ tabEvt($(this)); });
    },
    copyTrigger: () => {
      components.copyBtn.on('click', function(){ copyEvt($(this)); });
    }
  }

  const init  = () => {
    components.scrBtn.length !== 0 && triggerEvt.scrBtnClick();
    components.targetBtn.length !== 0 && triggerEvt.targetBtnClick();
    components.modalBtn.length !== 0 && triggerEvt.modalBtnTrigger();
    components.accordionBtn.length !== 0 && triggerEvt.accordionTrigger();

    components.menuBtn.length !== 0 && toggleMenuEvt();
    components.tab.length !== 0 && tabInit(components.tab);
    components.tab.length !== 0 && triggerEvt.tabTrigger();

    components.copyBtn.length !== 0 && triggerEvt.copyTrigger();
  }
  init();
})