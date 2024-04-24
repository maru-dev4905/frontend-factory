const accordionEvt = (th) => {
  if(th.closest("li").hasClass("active")){
    th.closest("li").removeClass("active");
  }else{
    th.closest("li").addClass("active");
  }
}

export default accordionEvt;