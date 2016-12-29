$(document).ready(function() {

/**/
	$('.mob-menu__icon').on('click', function() {
		$(this).parent().children('.nav-toggle').stop(true, false).fadeToggle(300);
		$(document).click(function(event) {
			if ($(event.target).closest(".nav-toggle").length) return;
				$(".nav-toggle").fadeOut(300);
				event.stopPropagation();
			});
		return false
	});

});