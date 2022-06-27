$(function() {

  $('.slider').slick({
    arrows: false,
    dots: true
  })

  var mixer = mixitup('.gallery__content', {
    animation: {
      enable: false
    }
  });

  var mixer = mixitup('.newest__content', {
    animation: {
      enable: false
    }
  });
});