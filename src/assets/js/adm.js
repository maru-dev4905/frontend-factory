window.onload = function(){
  setTimeout(() => {
    $("body").addClass("wv_adm");
  }, 100);
};

$(document).ready(function(){
  $(".adm_menu_btn").on('click', function(){
    $(".adm_menu").toggleClass("hide");
    if($(".lang_btn").hasClass("on")){
      $(".lang_btn").removeClass("on");
      $(".side_lang_list").removeClass("on");
    }
  });

  $(".lang_btn").on("click", function() {
    if($(".adm_menu").hasClass("hide")){
      $(".adm_menu").removeClass("hide");
    }
  });
});