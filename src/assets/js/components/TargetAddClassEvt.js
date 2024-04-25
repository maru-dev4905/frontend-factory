const targetClickEvt = (th)=>{
  console.log(th);
  let target = th.data('target');
  if(th.hasClass("on")){
    th.removeClass("on");
    $(`#${target}`).removeClass("on");
  }else{
    th.addClass("on");
    $(`#${target}`).addClass("on");
  }
}

export default targetClickEvt;