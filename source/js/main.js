$(document).ready(function(){
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  });
});

window.addEventListener("resize", function () {
  var withWindow = window.innerWidth;
  if (withWindow > 1300) {
    $('.slider').slick('unslick');
  }
});