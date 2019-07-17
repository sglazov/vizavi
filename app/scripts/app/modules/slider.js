$(document).ready(function(){

  var owl          = $('.js_traders-list');
  var owlLeft      = owl.parents('.traders-slider__list').find('.js_slider-left');
  var owlRight     = owl.parents('.traders-slider__list').find('.js_slider-right');

  owl.owlCarousel({
    loop:true,
    items:4
  });
  owlLeft.click(function(){
    owl.trigger('prev.owl.carousel');
  });
  owlRight.click(function(){
    owl.trigger('next.owl.carousel');
  });

  var owl2          = $('.js_advantage-slider');
  var owlLeft2      = owl2.parents('.text-investor__cards').find('.js_slider-left');
  var owlRight2     = owl2.parents('.text-investor__cards').find('.js_slider-right');

  owl2.owlCarousel({
    loop:true,
    margin:30,
    items:4
  });
  owlLeft2.click(function(){
    owl2.trigger('prev.owl.carousel');
  });
  owlRight2.click(function(){
    owl2.trigger('next.owl.carousel');
  });
});