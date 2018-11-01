$(function(){
    // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.product-filter').on( 'click', 'a', function() {
      $('.product-filter a.active').removeClass('active');
      $(this).addClass('active');

      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.product-listing-hider').on('click', 'a', function() {
        $('.product-listing-container').css('height', 'auto');
        $('.product-listing-hider').hide();
    });
});
