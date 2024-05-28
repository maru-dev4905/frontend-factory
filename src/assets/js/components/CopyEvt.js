const copyEvt = (th) => {
  let comment;
  let copyTxt;

  if(th.data('popup')){
    $(`#${th.data('popup')}`).addClass("show");
    $(".copy_popup").find("input").val(window.location);
    $(".copy_popup .close_btn").on("click", function(){
      $(this).closest(".copy_popup").removeClass("show");
    });
  }else if(th.data('target')){
    comment = "텍스트가 클립보드에 복사되었습니다.";
    copy('target', comment);
  }else{
    comment = "링크가 클립보드에 복사되었습니다.";
    copy('loc', comment);
  }
  function copy(c, cm){
    const textarea = document.createElement('textarea');
    if(c == 'loc'){
      textarea.value = window.location
    }else if('target'){
      if($(`#${th.data('target')}`).prop('tagName') == 'INPUT'){
        textarea.value = $(`#${th.data('target')}`).val();
      }else{
        textarea.value = $(`#${th.data('target')}`).text();
      }
    }
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    if(th.data('time')){
      let time = th.data('time');
      copyTxt = $(".copy_txt");
      copyTxt.text(cm);
      copyTxt.addClass("show");
      setTimeout(()=>{
        copyTxt.removeClass("show");
      },time );
    }else{
      alert(cm);
    }
  }
}
export default copyEvt;
