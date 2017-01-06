$(document).ready(function(){
	$('.main-content__bslider').slick({
		arrows: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});