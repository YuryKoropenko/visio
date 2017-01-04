$(document).ready(function(){
	$('.sl1').slick({
		asNavFor: '.sl2',
		arrows: false
	});
	$('.sl2').slick({
		asNavFor: '.sl1',
		slidesToShow: 2,
		focusOnSelect: true
	});
});