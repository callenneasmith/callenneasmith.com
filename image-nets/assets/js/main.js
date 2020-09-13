$(document).ready(function(){
	console.log(':)');

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



	$('.btn-two').click(function(){
		$('.item').addClass('item-two')
		$('.item').removeClass('item-three')
	});
	$('.btn-three').click(function(){
		$('.item').addClass('item-three')
		$('.item').removeClass('item-two')
	});
	$('.btn-four').click(function(){
		$('.item').removeClass('item-two')
		$('.item').removeClass('item-three')
	});



	});