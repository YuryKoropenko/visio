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

/**/
	$('.sidebar-menu__title').on('click', function() {
		$(this).parent().children('.sidebar-menu__wrapper').stop(true, false).slideToggle(300);
		$(this).children('.sidebar-menu__title-name').toggleClass('sidebar-menu__title-name-open');
	});

});