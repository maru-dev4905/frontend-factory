import wvTab from "./components/Tab/Tab.js";
import wvAccordion from "./components/Accordion/Accordion.js";
import wvModal from "./components/Modal/Modal.js";
import wvCopyBtn from "./components/Copy/CopyBtn.js"
import wvTargetBtn from "./components/TargetBtn/TargetBtn";
import wvScrBtn from "./components/ScrBtn/ScrBtn";

document.addEventListener('DOMContentLoaded', () => {
  $(".wv_tab").length !== 0 && wvTab();
  $(".wv_accordion").length !== 0 && wvAccordion();
  $(".wv_modal").length !== 0 && wvModal();
  $(".wv_copy_btn").length !== 0 && wvCopyBtn({ feedback: "modal"});
  $(".wv_target_btn").length !== 0 && wvTargetBtn();
  $(".wv_scr_btn").length !== 0 && wvScrBtn();
});