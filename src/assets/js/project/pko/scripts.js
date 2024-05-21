import('../../../scss/wv.scss');
import('../../../scss/project/pko/pko.scss');

import fullpage from 'fullpage.js';

$(document).ready(function(){
  const pkoScript = {
    filterClickEvt : (th)=>{
      th.siblings(".filter_btn").removeClass("active");
      th.addClass("active");
    },
    fullpageInit : () => {
      new fullpage('.pko_fullpage', {
            licenseKey: '525FEA2C-B53D4917-B55E7B10-97A4CE1F',
            scrollHorizontallyKey: 'QU5ZX1dPMWMyTnliMnhzU0c5eWFYcHZiblJoYkd4NTJDNQ==',
            scrollHorizontally: true,
            onLeave: function(origin, destination, direction){

            },
            onSlideLeave: function(section, origin, destination, direction){

            }
          }
      );
    },
    layoutChange : () => {
      $(".layout_chg_btn").on("click", function(){
        $(".layout_chg_btn").removeClass("active");
        $(this).addClass("active");
        let layout = $(this).data("layout");
        $(".pko_layout").removeClass("list grid card").addClass(layout);

        if($("#wv_cont").hasClass("publication")){
          $(".cont_hd").removeClass("list grid card").addClass(layout);
          $(".cont_body").removeClass("list grid card").addClass(layout);
        }
      });
    },
    referenceSwiper: () => {
      const swiper = new Swiper('.reference_swiper', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      });
    }
  }

  $(".filter_btn").length && $(".filter_btn").on("click", function(){
    pkoScript.filterClickEvt($(this));
  });
  $(".pko_fullpage").length && pkoScript.fullpageInit();
  $(".layout_chg_wrap").length && pkoScript.layoutChange();
  $(".reference_swiper").length && pkoScript.referenceSwiper();
});
