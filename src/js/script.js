$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
      dotsClass: 'my-dots',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
          }
        },
        // {
        //   breakpoint: 575,
        //   settings: {
        //     dots: true,
        //     arrows: false,
        //   }
        // },
        // {
        //   breakpoint: 320,
        //   settings: {
        //     dots: true,
        //     arrows: false,
        //   }
        // }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });