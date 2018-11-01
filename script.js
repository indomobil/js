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
