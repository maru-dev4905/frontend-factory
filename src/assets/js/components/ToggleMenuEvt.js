const toggleMenuEvt = () => {
  // 햄버거 메뉴 이벤트
  const menuEl = $(".menu_wrap");
  const menuBtn = $(".menu_btn");
  const gnbBtn = $(".gnb_menu > button");
  let isOpen = false;

  const toggleMenu=(e)=>{
    if(e.target.classList.contains("menu_btn")){
      if(isOpen){
        menuEl.removeClass("show");
        menuBtn.removeClass("show");
        gnbBtn.removeClass("active");
        $("header").removeClass("menu_open");
      }else{
        menuEl.addClass("show");
        menuBtn.addClass("show");
        $("header").addClass("menu_open");
      }
      isOpen = !isOpen;
    }else if(e.target.classList.contains("gnb_btn")){
      if(e.target.classList.contains("active")){
        gnbBtn.removeClass("active");
      }else{
        gnbBtn.removeClass("active");
        e.target.classList.add("active")
      }
    }
  }
  menuBtn.on("click",toggleMenu);
  gnbBtn.on("click",toggleMenu);
}

export default toggleMenuEvt;