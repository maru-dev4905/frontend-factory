import('../scss/wv.scss');
import('../scss/wv_admin.scss');

window.onload = function(){
  setTimeout(() => {
    $("body").addClass("wv_adm");
  }, 100);
};

$(document).ready(function(){
  $(".adm_menu_btn").on('click', function(){
    $(".adm_menu").toggleClass("hide");
  });
});