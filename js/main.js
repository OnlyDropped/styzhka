$(function () {
  $('.flat__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          infinite: true
        }
      }
    ],
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          dots: true,
          infinite: true
        }
      }
    ]
  });
  //$('.center').slick({
  //  //centerMode: true,
  //  //centerPadding: '0',
  //  //slidesToShow: 3
  //});
});