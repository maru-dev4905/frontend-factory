const tabInit = (tab) =>{
  for(let i=0; i < tab.length; i++){
    if(tab.eq(i).data("default") === ' ' || tab.eq(i).data("default") === '' || tab.eq(i).data("default") == undefined){
      tab.eq(i).find('.tab_btn_wrap').eq(0).find('.wv_tab_btn').eq(0).addClass("active");
      tab.eq(i).find('.tab_content_wrap').eq(0).find('.tab_content').eq(0).addClass("active");
    }else{
      tab.eq(i).find('> .tab_btn_wrap > .wv_tab_btn').eq(tab.eq(i).data("default")).addClass("active");
      tab.eq(i).find('> .tab_content_wrap > .tab_content').eq(tab.eq(i).data("default")).addClass("active");
    }
  }
}

export default tabInit;