$(document).ready(function(){
	console.log(':)');

	$('.open').click(function(){
		$('.container').removeClass('hide')
		$('.land').addClass('hide')
		$('.fix').removeClass('hide')

	});

	$('.btn-menu').click(function(){
		$('.nav').addClass('slide')
	});

	$('.close').click(function(){
		$('.nav').removeClass('slide')
	});



	$('.btn-reset').click(function(){
		$('.item').removeClass('hide')
	});

	$('.btn-retail').click(function(){
		$('.item').addClass('hide')
		$('.item.retail').removeClass('hide')
	});

	$('.btn-les').click(function(){
		$('.item').addClass('hide')
		$('.item.les').removeClass('hide')
	});

	$('.btn-food').click(function(){
		$('.item').addClass('hide')
		$('.item.food').removeClass('hide')
	});

	$('.btn-ser').click(function(){
		$('.item').addClass('hide')
		$('.item.ser').removeClass('hide')
	});
	$('.btn-un').click(function(){
		$('.item').addClass('hide')
		$('.item.un').removeClass('hide')
	});


	$('.btn-one').click(function(){
		$('.item').addClass('item-one')
		$('.item').removeClass('item-two')
		$('.item').removeClass('item-three')
	});
	$('.btn-two').click(function(){
		$('.item').addClass('item-two')
		$('.item').removeClass('item-three')
		$('.item').removeClass('item-one')
	});
	$('.btn-three').click(function(){
		$('.item').addClass('item-three')
		$('.item').removeClass('item-two')
		$('.item').removeClass('item-one')
	});
	$('.btn-four').click(function(){
		$('.item').removeClass('item-two')
		$('.item').removeClass('item-three')
		$('.item').removeClass('item-one')
	});

	if ($(window).width() < 900) {
		$('.btn-one').removeClass('hide')
		$('.btn-four').addClass('hide')
	}

	if ($(window).width() > 900) {
		$('.btn-one').addClass('hide')
		$('.btn-four').removeClass('hide')
	}


	 $( function() {
    	$( ".bau").draggable();
    	$( ".covid").draggable();
  	} );



	});