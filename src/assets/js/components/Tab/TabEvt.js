const tabEvt = (th)=>{
  if(!th.hasClass("active")){
    th.closest(".tab_btn_wrap").find(".wv_tab_btn").removeClass("active");
    th.addClass("active");
    th.closest(".wv_tab").find("> .tab_content_wrap > .tab_content").removeClass("active");
    th.closest(".wv_tab").find("> .tab_content_wrap > .tab_content").eq(th.index()).addClass("active");
  }else return false;
}

export default tabEvt;