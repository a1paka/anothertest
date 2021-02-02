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

window.addEventListener("resize", function() {
  if (window.innerWidth >= 1300) {
    $('.slider').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('slider').slick();
      sliderIsLive = true;
    }
  }
});