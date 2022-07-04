$(function() {

  $('.product-slide__thumbs').slick({
    asNavFor: '.product-slide__main',
    focusOnSelect: true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  
  $('.product-slide__main').slick({
    asNavFor: '.product-slide__thumbs',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.pagination__item').on('click', function(){
    $('.pagination__item').removeClass('pagination__item--active');
    $(this).addClass('pagination__item--active');
  });

  $('.select-style').styler();
  
  $('.login__checkbox').styler();


  $('.rating').rateYo({
    starWidth: "11px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true
  })
  
  $('.product-item__rating').rateYo({
    starWidth: "16px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true
  })

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

$(function(){
  $('.filters__price-value').ionRangeSlider({
    type: 'double',
    min: 100,
    max: 500,
    from: 200,
    to: 350,
    prefix: "$",
    onChange: function(data){
      $('.filters__price-from').text(data.from);
      $('.filters__price-to').text(data.to);
    }
  });
})