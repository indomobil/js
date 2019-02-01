jQuery(function($) {'use strict';
	
	//Initiat WOW JS
	new WOW().init();
	
	//copyright
	$('img').bind('contextmenu', function(e){
	return false;
	});
	
	$('img').bind('mouseover', function () {
		var img = $(this); // cache query
			if (img.title) {
			  return;
			}
		img.attr('title', img.attr('alt'));
	});
	//Scrollspy
	$('body').scrollspy({ target: '#navalphaoo' })
	//main
	var $toTop = $('#toTop');
		$('#toTop').hide();
		$(window).scroll(function () 
		{
			if ($(this).scrollTop() > 100)
			{
				$toTop.fadeIn('slow');
			} else if ($toTop.is(':visible')) 
			{
				$toTop.fadeOut('slow');
			}
		});

		$('#toTop').click(function()
		{
			$('html,body').animate({scrollTop:0},1200);
			return false;
		});

		$('.gowes').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 600);
			return false;
		});
		
		$('#header').affix({
		  offset: {
			top: 700
		  }
		});

	});
	
	//autohidenav
	$('.navbar-nav li a.gowes').click(function () {
		$('.navbar-collapse').collapse('hide');
	});
	$('.carousel').carousel({
	  interval: 3000
	})
	/*
	//accessorieslist
	$('document').ready(function(){
		$('#accessorieslist').indolist({				
			itemsBox: '.list' 
			,itemPath: '.list-item' 
			,panelPath: '.indolist-panel'
		});
	});
	*/