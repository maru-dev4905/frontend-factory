const scrBtnEvt = (th) => {
  if(th.data('scr') === "up"){
    $("html, body").animate({
      scrollTop: 0
    },1000)
  }else if(th.data('scr') === 'down'){
    $("html, body").animate({
      scrollTop: $(window).innerHeight()
    },1000)
  }else{
    let anchor = th.data('scr');
    $("html, body").animate({
      scrollTop: $(`#${anchor}`).offset().top
    },1000)
  }
}
export default scrBtnEvt;