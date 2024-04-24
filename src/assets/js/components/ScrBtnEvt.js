const scrBtnEvt = (th) => {
  if(th.data('scr') === "up"){
    $("html, body").animate({
      scrollTop: 0
    },1000)
  }else if(th.data('scr') === 'down'){
    $("html, body").animate({
      scrollTop: $("section").eq(1).offset().top
    },1000)
  }else if(th.data('anchor')){
    let anchor = th.data('anchor');
    $("html, body").animate({
      scrollTop: $(`.${anchor}`).offset().top
    },1000)
  }
}
export default scrBtnEvt;