import youtubeModalEvt from "./YoutubeModalEvt";

const basicModalEvt = (th) => {
  const dim = $(".dim");
  const modals = $(".wv_modal");
  let name = $(th).data("modal");

  const openModal = (name) => {
    if($(th).is("[data-youtube]")){
      youtubeModalEvt(th,name, 1);
    }
    modals.hide();
    $(`#${name}`).show();
    dim.show();
  }
  const closeModal = (name) => {
    if($(th).is("[data-youtube]")){
      youtubeModalEvt(th,name, 0);
    }
    $(`#${name}`).hide();
    dim.hide();
  }

  th.hasClass("close_modal") ? closeModal(name) : openModal(name);
}

export default basicModalEvt;