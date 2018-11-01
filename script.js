$(function(){
    $('body').on('click', '.navbar-toggler', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.navbar-menu').toggleClass('open');
        $('.navbar-menu').slideToggle();

        if ($('#productMenu').is(':visible')) {
            $('#productMenu').fadeOut();
        }
    });

    $( document ).ajaxStart(function() {
        $( "#loading" ).show();
    });
    $( document ).ajaxStop(function() {
        $( "#loading" ).hide();
    });
});

function openProduct (type) {
    $('#productMenu').html('');
    $('#productMenu').fadeIn();
    $('#productMenu').load(base_url+'product/menu/'+type);
}
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
