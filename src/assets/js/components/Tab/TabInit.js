import tabEvt from './TabEvt';

const tabInit = (tab) =>{
  for(let i=0; i < tab.length; i++){
    if(tab.eq(i).data("starttab") == '' || tab.eq(i).data("starttab") == undefined){
      tab.eq(i).find('> .tab_btn_wrap > .wv_tab_btn').eq(0).addClass("active");
      tab.eq(i).find('> .tab_content_wrap > .tab_content').eq(0).addClass("active");
    }else{
      tab.eq(i).find('> .tab_btn_wrap > .wv_tab_btn').eq(tab.eq(i).data("starttab")).addClass("active");
      tab.eq(i).find('> .tab_content_wrap > .tab_content').eq(tab.eq(i).data("starttab")).addClass("active");
    }
  }

  tab.on("click", ".wv_tab_btn", tabEvt($(this)));
}

export default tabInit;