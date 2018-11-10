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

$(function(){
    $('.color-options').on('click', 'a', function() {
        var variant = $(this).data('variant');
        var name = $(this).data('name');
        $('.color-options a.active').removeClass('active');
        $(this).addClass('active');

        $('.color-preview img.active').removeClass('active');
        $('#variant_'+variant).addClass('active');
        $('.variant-name').html(name);
    });
    $('.section-nav').on('click', 'a', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 65
        }, 500);
    })
});
